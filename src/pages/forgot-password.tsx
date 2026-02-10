import { useForm } from 'react-hook-form'
import type { ForgotPasswordFormSchema } from '../lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordFormSchema } from '../lib/validations'
import { useState } from 'react'
import { Link } from 'react-router'
import ResetPasswordForm from '../components/forms/reset-password.form'
import { FieldGroup } from '../components/ui/field'

export default function ForgotPassword() {
  const forgotPasswordForm = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: { email: '' },
  })

  const [userId, setUserId] = useState('')

  const onForgotPasswordFormSubmit = (data: ForgotPasswordFormSchema) => {
    console.log(data)
  }

  return (
    <div className='space-y-2'>
      {userId ? (
        <ResetPasswordForm userId={userId} />
      ) : (
        <form
          id='forgot-password-form'
          onSubmit={forgotPasswordForm.handleSubmit(onForgotPasswordFormSubmit)}
        >
          <FieldGroup>
            
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
