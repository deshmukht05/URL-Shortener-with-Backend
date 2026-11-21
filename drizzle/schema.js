import { relations } from "drizzle-orm/_relations";
import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const shortLinksTable = mysqlTable("short_link", {
  id: int().primaryKey().autoincrement(),
  url: varchar({ length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 20 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  userId: int("user_id")
    .notNull()
    .references(() => userTable.id),
});

export const userTable = mysqlTable("users", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

//* A User can have many Short Links (many-to-many relation)
export const userRelations = relations(userTable, ({ many }) => ({
  shortLinks: many(shortLinksTable),
}));

//* A Short Links belongs to a User
//? We have to define 2 extra fields in one-to-one and many-to-one relations
export const shortLinksRelation = relations(shortLinksTable, ({ one }) => ({
  user: one(userTable, {
    fields: [shortLinksTable.userId], // Foreign Key
    references: [userTable.id],
  }),
}));
