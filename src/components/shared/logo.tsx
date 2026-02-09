import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to={'/'}>
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <img src='/logo.svg' alt='Logo' width={30} height={30} />
        <p className='text-lg text-neutral-700 pb-1 font-bold'>Taskify</p>
      </div>
    </Link>
  )
}
