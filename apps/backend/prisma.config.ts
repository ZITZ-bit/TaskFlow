import "dotenv/config";
import { join } from "path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "db/migrations",
    seed: join(__dirname, "db/seed.ts"),
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
