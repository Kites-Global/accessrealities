// Prisma's schema engine can't speak the `libsql://` protocol, so `prisma db push` / `migrate deploy`
// don't work against Turso directly (fails with P1013). This script works around that by diffing
// schema.prisma against the last-applied snapshot (pure file diff, no live connection needed) and
// executing the resulting SQL against Turso over @libsql/client, which *does* support it.
import "dotenv/config";
import { execFileSync } from "node:child_process";
import { existsSync, copyFileSync } from "node:fs";
import { createClient } from "@libsql/client";

const SCHEMA_PATH = "prisma/schema.prisma";
const SNAPSHOT_PATH = "prisma/.applied-schema.prisma";

const args = existsSync(SNAPSHOT_PATH)
  ? ["migrate", "diff", "--from-schema", SNAPSHOT_PATH, "--to-schema", SCHEMA_PATH, "--script"]
  : ["migrate", "diff", "--from-empty", "--to-schema", SCHEMA_PATH, "--script"];

const sql = execFileSync("npx", ["prisma", ...args], {
  encoding: "utf8",
  shell: process.platform === "win32",
});

const statements = sql
  .split(/;\s*\n/)
  .map((s) => s.trim())
  .filter((s) => s.replace(/--.*$/gm, "").trim().length > 0);

if (statements.length === 0) {
  console.log("No schema changes to apply.");
  process.exit(0);
}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

for (const statement of statements) {
  console.log("Executing:", statement.split("\n")[0]);
  await client.execute(statement);
}

copyFileSync(SCHEMA_PATH, SNAPSHOT_PATH);
console.log(`Applied ${statements.length} statement(s) to Turso.`);
