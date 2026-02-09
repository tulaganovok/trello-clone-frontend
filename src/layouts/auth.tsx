import { Outlet } from 'react-router'

export default function Auth() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Outlet />
    </div>
  )
}
