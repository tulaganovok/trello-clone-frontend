import { Link } from 'react-router'
import { Button } from '../ui/button'
import Logo from './logo'

export default function Navbar() {
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-7xl mx-auto flex items-center w-full justify-between'>
        <Logo />

        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Button size={'sm'} variant={'outline'} asChild>
            <Link to={'/sign-in'}>Login</Link>
          </Button>
          
          <Button size={'sm'} asChild>
            <Link to={'/sign-up'}>Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
