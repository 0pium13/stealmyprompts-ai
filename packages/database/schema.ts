import { pgTable, uuid, varchar, text, decimal, integer, timestamp, boolean } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  auth0Id: varchar('auth0_id', { length: 255 }).unique().notNull(),
  role: varchar('role', { length: 20 }).default('buyer').notNull(),
  razorpayAccountId: varchar('razorpay_account_id', { length: 255 }),
  isVerified: boolean('is_verified').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
})

export const prompts = pgTable('prompts', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  content: text('content').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  categoryId: uuid('category_id').notNull(),
  creatorId: uuid('creator_id').notNull(),
  qualityScore: decimal('quality_score', { precision: 3, scale: 2 }),
  downloads: integer('downloads').default(0),
  rating: decimal('rating', { precision: 3, scale: 2 }),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
})

export const promptsRelations = relations(prompts, ({ one }) => ({
  creator: one(users, {
    fields: [prompts.creatorId],
    references: [users.id]
  })
}))
