import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  fullName: text("fullName"),
});

export const profiles = sqliteTable("profiles", {
  col1: integer("col1").primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
});
