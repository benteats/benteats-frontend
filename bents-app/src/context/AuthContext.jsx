import { createContext } from 'react'
import { useEffect, useState } from 'react'
import { MdOutlineError } from 'react-icons/md'
import { Navigate } from 'react-router-dom'
import { api } from '../api/axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const loadingStoreData = () => {
      const storageToken = localStorage.getItem('token')

      if (storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`
        setUserData(userData)
        console.log('userData', userData)
      }

    }
    loadingStoreData()

  }, [])

  const handleLogin = async (formLogin, { setErrorPostUser }) => {
    try {
      let { data } = await api.post(`/login`, formLogin)
      data = data.split(/[ ]+/)
      localStorage.setItem('token', data[2])
      api.defaults.headers.common['Authorization'] = `Bearer ${data[2]}`
      setUserData({
        idUser: data[0],
        userType: data[1],
        token: data[2]
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
    setUserData(null)
    localStorage.removeItem('token')
    api.defaults.headers.common['Authorization'] = undefined
    return <Navigate to='/login' />
  }

  return (
    <AuthContext.Provider value={{
      userData,
      handleLogin,
      handleLogout,
      signed: !!userData,
    }} >
      {children}
    </AuthContext.Provider>
  )
}
