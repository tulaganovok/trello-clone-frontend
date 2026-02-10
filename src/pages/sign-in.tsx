import { useForm } from 'react-hook-form'
import type { SignInFormSchema } from '../lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInFormSchema } from '../lib/validations'
import { FieldGroup } from '../components/ui/field'
import InputField from '../components/fields/input.field'
import { Button } from '../components/ui/button'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import { AxiosError } from 'axios'
import { authService } from '../services/auth.service'
import { authStore } from '../store/auth.store'
import { toast } from 'sonner'
import VerifyOtpForm from '../components/forms/verify-otp.form'

export default function SignIn() {
  const signInForm = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: '', password: '' },
  })

  const [email, setEmail] = useState('')
  const { setAuth } = authStore()
  const navigate = useNavigate()

  const isSignInFormSubmitting = signInForm.formState.isSubmitting

  const onSignInFormSubmit = async (data: SignInFormSchema) => {
    try {
      const res = await authService.signIn(data)
      setAuth(res.data)
      navigate('/dashboard')
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data.message === 'Email not verified') {
          console.log(data.email)

          await authService.resendOtp({ email: data.email })
          setEmail(data.email)

          return toast.warning('Verification code sent this email address')
        }

        return toast.error(error.response?.data.message)
      }

      toast.error('Something went wrong')
    }
  }

  return (
    <div className='space-y-2'>
      {email ? (
        <VerifyOtpForm email={email} setEmail={setEmail} />
      ) : (
        <form id={'sign-in-form'} onSubmit={signInForm.handleSubmit(onSignInFormSubmit)}>
          <FieldGroup>
            <InputField
              name='email'
              control={signInForm.control}
              label='Email address'
              type='email'
              placeholder='Enter your email address'
              autoComplete='email'
              disabled={isSignInFormSubmitting}
            />

            <InputField
              name='password'
              control={signInForm.control}
              label='Password'
              type='password'
              placeholder='Enter your password'
              autoComplete='password'
              disabled={isSignInFormSubmitting}
            />

            <Button disabled={isSignInFormSubmitting}>Sign In</Button>
          </FieldGroup>
        </form>
      )}

      <div className='space-y-1 text-sm'>
        <div className='flex items-center gap-x-2'>
          <span className='text-muted-foreground'>Don't have an account yet?</span>
          <Link to={'/sign-up'} className='text-primary hover:underline'>
            Sign up
          </Link>
        </div>

        <Link to={'/forgot-password'} className='text-primary hover:underline'>
          Forgot password?
        </Link>
      </div>
    </div>
  )
}
