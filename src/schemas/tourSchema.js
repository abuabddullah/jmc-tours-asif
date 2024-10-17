// tourSchema.ts
import { z } from 'zod';

const reviewSchema = z.object({
//   userId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid userId format'), // MongoDB ObjectId format
  userId: z.string().optional(),
  review: z.string().optional(),
});

const tourSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  image: z.string().url().default('https://i.ibb.co/jvBVcJh/tour-9.jpg').optional(),
  location: z.string().min(1, 'Location is required'),
  country: z.string().min(1, 'Country is required'),
  category: z.enum(['Wildlife', 'Adventure']).default('Adventure'),
  tourCount: z.number().int().nonnegative().default(0),
  ratings: z.number().min(0).max(5).optional(),
  cost: z.number().positive().min(0, 'Cost must be greater than 0'),
  reviews: z.array(reviewSchema).optional(),
});

export default tourSchema;
