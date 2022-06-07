import { useLayoutEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import SearchRestaurant from './pages/searchRestaurant/SearchRestaurant'
import Restaurant from './pages/restaurant/Restaurant'
import AuthProvider from './context/AuthContext'
import history from './history'
import ProgressBar from '@badrap/bar-of-progress'
import { paletteColors } from './styles/Root'

const progress = new ProgressBar({
  size: 3,
  color: paletteColors.primary,
  className: 'z-50',
  delay: 100
})

progress.start();

setTimeout(() => {
  progress.finish();
}, 1000);

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}

export default function App() {
  return (
    <>
      <AuthProvider>
        <CustomRouter history={history}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/restaurantes" element={
              <PrivateRoute redirectTo="/login">
                <SearchRestaurant />
              </PrivateRoute>
            } />
            <Route path="/restaurantes/restaurante/:id" element={
              <PrivateRoute redirectTo="/login">
                <Restaurant />
              </PrivateRoute>
            } />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </CustomRouter>
      </AuthProvider>
    </>
  )
}
