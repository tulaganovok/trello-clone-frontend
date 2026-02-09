import { z } from 'zod';

const signInFormSchema = z.object({
  email: z.email('Invalid email address'),
  password: z
    .string('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be less than 16 characters'),
});

const signUpFormSchema = z.object({
  fullName: z
    .string('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(32, 'Full name must be less than 32 characters'),
  email: z.email('Invalid email address'),
  password: z
    .string('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be less than 16 characters'),
});

export { signInFormSchema, signUpFormSchema };
