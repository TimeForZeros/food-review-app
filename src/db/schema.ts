import { integer, pgTable, varchar, uuid, text } from "drizzle-orm/pg-core";
import { createSelectSchema } from 'drizzle-zod';

const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar().notNull(),
  email: varchar().notNull().unique(),
  password: 
})