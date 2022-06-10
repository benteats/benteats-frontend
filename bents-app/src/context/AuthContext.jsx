import { createContext } from 'react'
import { useEffect, useState } from 'react'
import { MdOutlineError } from 'react-icons/md'
import { Navigate } from 'react-router-dom'
import { api } from '../api/axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const loadingStoreData = () => {
      const storageToken = localStorage.getItem('token')

      if (storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`
        setAuthenticated(true)
        setUserData(userData)
        console.log('userData', userData)
      }

    }
    loadingStoreData()

  }, [])

  const handleLogin = async (formLogin, { setErrorPostUser }) => {
    try {
      const { data } = await api.post(`/login`, formLogin)
      const userType = data.substring(0, data.indexOf(' '))
      const token = data.substring(data.indexOf(' ') + 1)

      localStorage.setItem('token', token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setAuthenticated(true)
      setUserData({
        userType: userType,
        token: token
      })
    } catch (e) {
      console.error('error postUser =>', e)
      setErrorPostUser(
        <>
          <MdOutlineError />
          Ops! Algum dos dados estão inválidos.
        </>
      )
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    setUserData(null)
    localStorage.removeItem('token')
    api.defaults.headers.common['Authorization'] = undefined
    return <Navigate to='/login' />
  }

  return (
    <AuthContext.Provider value={{
      authenticated,
      userData,
      handleLogin,
      handleLogout,
      signed: !!userData,
    }} >
      {children}
    </AuthContext.Provider>
  )
}
