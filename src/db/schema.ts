import { pgTable, varchar, char, uuid, text, check, integer, pgEnum } from 'drizzle-orm/pg-core';
// import { createSelectSchema, createUpdateSchema, createInsertSchema } from 'drizzle-zod';

export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 256 }).notNull(),
  email: varchar({ length: 320 }).notNull().unique(),
  password: char({ length: 97 }).notNull(),
});

export const restaurant = pgTable('restaurant', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: uuid().references(() => users.id),
  name: varchar({ length: 256 }).notNull(),
  location: varchar({ length: 512 }),
  type: char({ enum: ['sit down', 'fast food', 'cafe', 'food truck', 'other'] }),
  details: text(),
  rating: char({ enum: ['terrible', 'bad', 'mid', 'good', 'great'] }),
});

export const item = pgTable('item', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 256 }).notNull(),
  restaurantId: integer().references(() => restaurant.id),
  type: char({ enum: ['drink', 'entree', 'combo', 'other'] }),
  details: text(),
  rating: char({ enum: ['terrible', 'bad', 'mid', 'good', 'great'] }),
});

// export const userSelectSchema = createSelectSchema(users);
// export const userInsertSchema = createInsertSchema(users);
// export const userUpdateSchema = createUpdateSchema(users);
