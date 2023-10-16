import { pgTable, serial, text, varchar, numeric } from "drizzle-orm/pg-core";
import { z } from "zod";
 
export const scoresTable = pgTable('scores', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().default(''),
  score: numeric('score').notNull().default('0')
});


export const scoresValidationSchema = z.object({
  name: z.string().min(1, "The name is required"),
  score: z.number().min(1, "The score is required"),
});