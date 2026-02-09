import { RouterProvider } from "react-router/dom";
import { router } from "./routes";
import { authStore } from "./store/auth.store";
import { useEffect } from "react";
import { api } from "./lib/axios";

export default function App() {
  const setAuth = authStore((s) => s.setAuth)

  useEffect(() => {
    api.post('/auth/refresh')
      .then((res) => setAuth(res.data))
      .catch(() => { })
  }, [])

  return (
    <RouterProvider router={router} />
  )
}
