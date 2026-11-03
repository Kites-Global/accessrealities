// Dumps a Turso/libSQL database to a SQL file using the same
// TURSO_DATABASE_URL / TURSO_AUTH_TOKEN the app uses.
// Usage: node dump.mjs [output-file]   (default: backup.sql)
import { createClient } from "@libsql/client";
import { createWriteStream } from "node:fs";
import { once } from "node:events";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;
const outFile = process.argv[2] ?? "backup.sql";

if (!url) throw new Error("TURSO_DATABASE_URL is not set");

const client = createClient({ url, authToken, intMode: "bigint" });
const out = createWriteStream(outFile, { encoding: "utf8" });

async function write(text) {
  if (!out.write(text)) await once(out, "drain");
}

const ident = (name) => `"${String(name).replace(/"/g, '""')}"`;

function literal(v) {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "bigint") return v.toString();
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : "NULL";
  if (typeof v === "string") return `'${v.replace(/'/g, "''")}'`;
  if (v instanceof ArrayBuffer) v = new Uint8Array(v);
  if (ArrayBuffer.isView(v)) {
    return `X'${Buffer.from(v.buffer, v.byteOffset, v.byteLength).toString("hex")}'`;
  }
  throw new Error(`Unsupported value type: ${typeof v}`);
}

async function main() {
  const schema = await client.execute(
    `SELECT type, name, sql FROM sqlite_schema
     WHERE sql IS NOT NULL
       AND name NOT LIKE 'sqlite_%'
       AND name NOT LIKE 'libsql_%'
     ORDER BY CASE type WHEN 'table' THEN 0 WHEN 'index' THEN 1 WHEN 'view' THEN 2 ELSE 3 END, name`
  );

  await write("PRAGMA foreign_keys=OFF;\nBEGIN TRANSACTION;\n");

  const summary = [];
  for (const row of schema.rows) {
    const { type, name, sql } = row;
    await write(`${sql};\n`);
    if (type !== "table") continue;

    const data = await client.execute(`SELECT * FROM ${ident(name)}`);
    const cols = data.columns.map(ident).join(", ");
    for (const r of data.rows) {
      const values = data.columns.map((_, i) => literal(r[i])).join(", ");
      await write(`INSERT INTO ${ident(name)} (${cols}) VALUES (${values});\n`);
    }
    summary.push(`${name}: ${data.rows.length} rows`);
  }

  await write("COMMIT;\n");
  out.end();
  await once(out, "finish");

  console.log(`Dumped ${summary.length} tables to ${outFile}`);
  for (const line of summary) console.log(`  ${line}`);
}

main()
  .catch((err) => {
    console.error("Dump failed:", err.message);
    process.exit(1);
  })
  .finally(() => client.close());
