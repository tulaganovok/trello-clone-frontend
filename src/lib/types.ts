import { z } from 'zod'
import {
  forgotPasswordFormSchema,
  signInFormSchema,
  signUpFormSchema,
  verifyOtpFormSchema,
} from './validations'

export type SignInFormSchema = z.infer<typeof signInFormSchema>
export type SignUpFormSchema = z.infer<typeof signUpFormSchema>
export type VerifyOtpFormSchema = z.infer<typeof verifyOtpFormSchema>
export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>
