import { createContext } from 'react'
import useAuth from './hooks/UseAuth';

export const Context = createContext()

export default function AuthProvider({ children }) {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <Context.Provider value={{ authenticated, loading, handleLogin, handleLogout }} >
      {children}
    </Context.Provider>
  )
}

