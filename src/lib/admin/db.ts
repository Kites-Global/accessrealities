import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../../generated/prisma/client";

declare global {
  var __adminPrisma: PrismaClient | undefined;
}

function createClient() {
  const adapter = new PrismaLibSql({
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
  return new PrismaClient({ adapter });
}

export const prisma = globalThis.__adminPrisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.__adminPrisma = prisma;
}
