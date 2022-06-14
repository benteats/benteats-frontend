import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { paletteColors } from '../styles/Root'
import ProgressBar from '@badrap/bar-of-progress'

export const PrivateRoute = () => {
  const progress = new ProgressBar({
    size: 2.5,
    color: paletteColors.primary,
    className: 'z-50',
    delay: 100
  })

  progress.start();

  setTimeout(() => {
    progress.finish();
  }, 1000);

  const { signed } = useContext(AuthContext)
  return signed ? <Outlet /> : <Navigate to='/login' />
};
