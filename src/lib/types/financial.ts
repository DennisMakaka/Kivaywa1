import { z } from 'zod';

export const contributionSchema = z.object({
  id: z.string(),
  amount: z.number().min(1, 'Amount must be greater than 0'),
  currency: z.enum(['KES', 'USD', 'EUR', 'GBP']),
  type: z.enum(['donation', 'membership', 'event']),
  status: z.enum(['pending', 'completed', 'failed']),
  description: z.string().optional(),
  anonymous: z.boolean().default(false),
  contributor: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const withdrawalSchema = z.object({
  id: z.string(),
  amount: z.number().min(1, 'Amount must be greater than 0'),
  currency: z.enum(['KES', 'USD', 'EUR', 'GBP']),
  status: z.enum(['pending', 'approved', 'rejected', 'completed']),
  reason: z.string().min(10, 'Please provide a detailed reason'),
  paymentDetails: z.object({
    bankName: z.string(),
    accountNumber: z.string(),
    accountName: z.string(),
  }),
  requestedBy: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  }),
  reviewedBy: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  }).optional(),
  reviewNote: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Contribution = z.infer<typeof contributionSchema>;
export type Withdrawal = z.infer<typeof withdrawalSchema>;