// import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {
  integer,
  sqliteTable,
  text,
} from "https://esm.sh/drizzle-orm@0.30.10/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
  fullName: text("fullName").notNull(),
  birthday: text("birthday"),
  phone: text("phone"),
});

export type UserSelect = typeof users.$inferSelect;
