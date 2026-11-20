import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const shortLinksTable = mysqlTable("short_link", {
  id: int().primaryKey().autoincrement(),
  url: varchar({ length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 20 }).notNull().unique(),
});

export const userTable = mysqlTable("users", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
