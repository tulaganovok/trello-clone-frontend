import { Button } from '../ui/button'
import Logo from './logo'

export default function Footer() {
  return (
    <div className='fixed bottom-0 w-full p-4 border-t'>
      <div className='md:max-w-7xl mx-auto flex items-center w-full justify-between'>
        <Logo imgWidth={30} imgHeight={30} textSize='lg' />

        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Button size={'sm'} variant={'ghost'}>
            Privacy Policy
          </Button>

          <Button size={'sm'} variant={'ghost'}>
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}
