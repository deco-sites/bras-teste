import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: Deno.env.get("DATABASE_URL") ?? "",
    authToken: Deno.env.get("DATABASE_AUTH_TOKEN") ?? "",
  },
  migrations: {
    schema: "public",
  },
});
