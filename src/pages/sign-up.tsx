import { useForm } from 'react-hook-form'
import type { SignUpFormSchema } from '../lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpFormSchema } from '../lib/validations'
import { FieldGroup } from '../components/ui/field'
import InputField from '../components/fields/input.field'
import { Button } from '../components/ui/button'
import { Link } from 'react-router'
import { authService } from '../services/auth.service'
import { showErrorMessage } from '../lib/utils'
import { useState } from 'react'
import VerifyOtpForm from '../components/forms/verify-otp.form'
import { toast } from 'sonner'

export default function SignUp() {
  const signUpForm = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: { fullName: '', email: '', password: '' },
  })

  const [email, setEmail] = useState('')

  const isSignUpFormSubmitting = signUpForm.formState.isSubmitting

  const onSignUpFormSubmit = async (data: SignUpFormSchema) => {
    try {
      const res = await authService.signUp(data)
      setEmail(res.data.user.email)
      toast.warning('Verification code sent this email address')
    } catch (error) {
      showErrorMessage(error)
    }
  }

  return (
    <div className='space-y-2'>
      {email ? (
        <VerifyOtpForm email={email} setEmail={setEmail} />
      ) : (
        <form id='sign-up-form' onSubmit={signUpForm.handleSubmit(onSignUpFormSubmit)}>
          <FieldGroup>
            <InputField
              name='fullName'
              control={signUpForm.control}
              label='Full name'
              placeholder='Enter your full name'
              autoComplete='name'
              disabled={isSignUpFormSubmitting}
            />

            <InputField
              name='email'
              control={signUpForm.control}
              label='Email address'
              type='email'
              placeholder='Enter your email address'
              autoComplete='email'
              disabled={isSignUpFormSubmitting}
            />

            <InputField
              name='password'
              control={signUpForm.control}
              label='Password'
              type='password'
              placeholder='Enter your password'
              autoComplete='password'
              disabled={isSignUpFormSubmitting}
            />

            <Button disabled={isSignUpFormSubmitting}>Sign Up</Button>
          </FieldGroup>
        </form>
      )}

      <div className='flex items-center gap-x-2 text-sm'>
        <span className='text-muted-foreground'>Already have an account?</span>
        <Link to={'/sign-in'} className='text-primary hover:underline'>
          Sign in
        </Link>
      </div>
    </div>
  )
}
