import { Link } from 'react-router'
import { cn } from '../../lib/utils'

interface LogoProps {
  imgWidth: number
  imgHeight: number
  textSize: string
  visibleAlways?: boolean
}

export default function Logo({ imgWidth, imgHeight, textSize, visibleAlways }: LogoProps) {
  return (
    <Link to={'/'}>
      <div className={cn('hover:opacity-75 transition items-center gap-x-2  md:flex', visibleAlways ? 'flex' : 'hidden')}>
        <img src='/logo.svg' alt='Logo' width={imgWidth} height={imgHeight} />
        <p className={`text-${textSize} text-neutral-700 pb-1 font-bold`}>Taskify</p>
      </div>
    </Link>
  )
}
