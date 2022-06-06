import { useLayoutEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import SearchRestaurant from './pages/searchRestaurant/SearchRestaurant'
import AuthProvider from './context/AuthContext'
import history from './history'

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
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </CustomRouter>
      </AuthProvider>
    </>
  )
}
