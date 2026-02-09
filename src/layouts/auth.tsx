import { Outlet } from 'react-router'
import Logo from '../components/shared/logo'

export default function Auth() {
  return (
    <div className='h-screen grid grid-cols-2'>
      <div className='max-md:hidden relative size-full'>
        <img src="/auth-bg.svg" alt="Auth Background" className='size-full object-cover' />
      </div>

      <div className='max-md:col-span-2 flex items-center justify-center'>
        <div className='flex flex-col gap-y-12 max-md:w-full max-md:px-4 min-w-sm'>
          <div className='w-full flex justify-center'>
            <Logo imgWidth={75} imgHeight={75} textSize='3xl' visibleAlways />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  )
}
