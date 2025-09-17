import { pgTable, varchar, char, uuid, text, check, integer, pgEnum } from 'drizzle-orm/pg-core';
import { user } from './auth-schema';
export * from './auth-schema';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export const restaurant = pgTable('restaurant', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  name: varchar({ length: 256 }).notNull(),
  location: varchar({ length: 512 }),
  type: char({ enum: ['sit down', 'fast food', 'cafe', 'food truck', 'other'] }),
  details: text(),
  rating: char({ enum: ['terrible', 'bad', 'mid', 'good', 'great'] }),
});
export type Restaurant = InferSelectModel<typeof restaurant>;
export type NewRestaurant = InferInsertModel<typeof restaurant>;

export const item = pgTable('item', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 256 }).notNull(),
  restaurantId: integer().references(() => restaurant.id),
  type: char({ enum: ['drink', 'entree', 'combo', 'other'] }),
  details: text(),
  ingredients: text().array(),
  rating: char({ enum: ['terrible', 'bad', 'mid', 'good', 'great'] }),
});
export type Item = InferSelectModel<typeof item>;
export type NewItem = InferInsertModel<typeof item>;
