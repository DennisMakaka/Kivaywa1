import { atom } from 'jotai';
import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.enum(['admin', 'alumni']),
  graduationYear: z.number(),
  profileImage: z.string().url().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

export const userAtom = atom<User | null>(null);

export const loginSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  graduationYear: z.number(),
});

export const passwordResetSchema = z.object({
  email: z.string().email('Valid email is required'),
});

export const newPasswordSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type PasswordResetInput = z.infer<typeof passwordResetSchema>;
export type NewPasswordInput = z.infer<typeof newPasswordSchema>;