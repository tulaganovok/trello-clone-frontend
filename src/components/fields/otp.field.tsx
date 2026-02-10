import { Controller, type Control, type FieldPath, type FieldValues } from 'react-hook-form'
import { type InputHTMLAttributes } from 'react'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'

interface InputFieldProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<T>
  control: Control<T>
  label?: string
}

export default function OtpField<T extends FieldValues>({
  name,
  control,
  label = '',
  disabled = false,
}: InputFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}

          <InputOTP {...field} maxLength={6} disabled={disabled} className='w-full'>
            <InputOTPGroup className='w-full gap-4'>
              {Array.from({ length: 6 }).map((_, index) => (
                <InputOTPSlot key={index} index={index} className='w-full' />
              ))}
            </InputOTPGroup>
          </InputOTP>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}
