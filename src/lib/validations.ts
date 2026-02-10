import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.email('Invalid email address'),
  password: z
    .string('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be less than 16 characters'),
})

export const signUpFormSchema = z.object({
  fullName: z
    .string('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(32, 'Full name must be less than 32 characters'),
  email: z.email('Invalid email address'),
  password: z
    .string('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be less than 16 characters'),
})

export const verifyOtpFormSchema = z.object({
  otp: z
    .string('Verification code is required')
    .length(6, 'Verification code must be 6 characters'),
})

export const forgotPasswordFormSchema = z.object({
  email: z.email('Invalid email address'),
})
