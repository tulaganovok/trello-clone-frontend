import { Outlet } from 'react-router'
import Navbar from '../components/shared/navbar'
import Footer from '../components/shared/footer'

export default function Marketing() {
  return (
    <div className='h-screen bg-slate-100'>
      <Navbar />

      <main className='pt-40 pb-20'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
