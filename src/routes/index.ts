import { createBrowserRouter } from 'react-router'
import Marketing from '../layouts/marketing'
import Home from '../pages/home'
import Auth from '../layouts/auth'
import SignIn from '../pages/sign-in'
import SignUp from '../pages/sign-up'
import Dashboard from '../layouts/dashboard'
import ForgotPassword from '../pages/forgot-password'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Marketing,
    children: [{ index: true, Component: Home }],
  },
  {
    path: '/',
    Component: Auth,
    children: [
      { path: '/sign-in', Component: SignIn },
      { path: '/sign-up', Component: SignUp },
      { path: '/forgot-password', Component: ForgotPassword },
    ],
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
])
