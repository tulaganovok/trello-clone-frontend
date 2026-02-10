import { AxiosError } from 'axios'
import { clsx, type ClassValue } from 'clsx'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function showErrorMessage(error: unknown) {
  if (error instanceof AxiosError) return toast.error(error.response?.data.message)

  return toast.error('Something went wrong')
}
