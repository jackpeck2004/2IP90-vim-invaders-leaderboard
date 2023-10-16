import { pgTable, serial, text, varchar, numeric } from "drizzle-orm/pg-core";
 
export const scoresTable = pgTable('scores', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().default(''),
  score: numeric('score').notNull().default('0')
});

