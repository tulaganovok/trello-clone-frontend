import { api } from '../lib/axios';

export const authService = {
  signUp: (payload: any) => api.post('/auth/sign-up', payload),

  signIn: (payload: any) => api.post('/auth/sign-in', payload),

  signOut: () => api.post('/auth/sign-out'),

  resendOtp: (payload: { email: string }) =>
    api.post('/auth/resend-otp', payload),

  verifyOtp: (payload: { email: string; otp: number }) =>
    api.post('/auth/verify-otp', payload),
};
