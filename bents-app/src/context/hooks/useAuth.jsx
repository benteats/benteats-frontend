import { useEffect, useState } from 'react'
import { MdOutlineError } from 'react-icons/md'
import axios from '../../api/axios'
import history from '../../history'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function handleLogin(formLogin, { setErrorPostUser }) {
    try {
      const { data } = await axios.post(`/login`, formLogin)

      localStorage.setItem('token', data)
      axios.defaults.headers.common['Authorization'] = `Bearer ${data}`
      setAuthenticated(true)
      history.push('/restaurantes')
      console.log('push')
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

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = undefined
    history.push('/login')
  }

  return { authenticated, loading, handleLogin, handleLogout }
}
