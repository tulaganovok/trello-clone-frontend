import { api } from '../lib/axios'
import type { SignInFormSchema } from '../lib/types'

export const authService = {
  signUp: (payload: SignInFormSchema) => api.post('/auth/sign-up', payload),

  signIn: (payload: SignInFormSchema) => api.post('/auth/sign-in', payload),

  signOut: () => api.post('/auth/sign-out'),

  resendOtp: (payload: { email: string }) => api.post('/auth/resend-otp', payload),

  verifyOtp: (payload: { email: string; otp: number }) => api.post('/auth/verify-otp', payload),
}
