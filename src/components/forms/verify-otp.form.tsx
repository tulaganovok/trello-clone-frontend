import { useForm } from 'react-hook-form'
import type { VerifyOtpFormSchema } from '../../lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { verifyOtpFormSchema } from '../../lib/validations'
import { FieldGroup } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import OtpField from '../fields/otp.field'
import { showErrorMessage } from '../../lib/utils'
import { authService } from '../../services/auth.service'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { toast } from 'sonner'
import { Label } from '../ui/label'

interface VerifyOtpFormProps {
  email: string
  setEmail: (email: string) => void
}

export default function VerifyOtpForm({ email, setEmail }: VerifyOtpFormProps) {
  const verifyOtpForm = useForm<VerifyOtpFormSchema>({
    resolver: zodResolver(verifyOtpFormSchema),
    defaultValues: { otp: '' },
  })

  const [isResendingOtp, setIsResendingOtp] = useState(false)

  const navigate = useNavigate()

  const isVerifyFormSubmitting = verifyOtpForm.formState.isSubmitting

  const onResendOtp = async () => {
    setIsResendingOtp(true)
    verifyOtpForm.reset()

    try {
      const res = await authService.resendOtp({ email })
      toast.success(res.data.message)
    } catch (error) {
      showErrorMessage(error)
    } finally {
      setIsResendingOtp(false)
    }
  }

  const onVerifyOtpFormSubmit = async (data: VerifyOtpFormSchema) => {
    try {
      const res = await authService.verifyOtp({ email, otp: +data.otp })

      toast.success(`${res.data.message}. Please sign in`)
      navigate('/sign-in', { replace: true })
      setEmail('')
    } catch (error) {
      showErrorMessage(error)
    }
  }

  return (
    <form id='verify-otp-form' onSubmit={verifyOtpForm.handleSubmit(onVerifyOtpFormSubmit)}>
      <FieldGroup>
        <div className='space-y-1'>
          <Label htmlFor='email'>Email address</Label>
          <Input id='email' value={email} disabled />
        </div>

        <OtpField
          name={'otp'}
          control={verifyOtpForm.control}
          type='number'
          label='Verification code'
          disabled={isResendingOtp || isVerifyFormSubmitting}
        />

        <div className='grid grid-cols-2 gap-x-2'>
          <Button type='submit' disabled={isResendingOtp || isVerifyFormSubmitting}>
            Verify
          </Button>

          <Button
            type='button'
            variant={'outline'}
            disabled={isResendingOtp || isVerifyFormSubmitting}
            onClick={onResendOtp}
          >
            Resend
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}
