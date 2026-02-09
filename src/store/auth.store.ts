import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  emailVerified: boolean;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;

  setAuth: (data: { user: User; accessToken: string }) => void;
  logout: () => void;
}

export const authStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,

  setAuth: (data) =>
    set({
      user: data.user,
      accessToken: data.accessToken,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    }),
}));
