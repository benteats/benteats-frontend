import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function RequireAuth ({ redirectTo }) {
  const { userData } = useContext(AuthContext)

  return (
    userData ? children : <Navigate to={redirectTo} />
  )
}
