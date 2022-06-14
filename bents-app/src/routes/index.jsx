import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import SearchRestaurant from '../pages/searchRestaurant/SearchRestaurant'
import Restaurant from '../pages/restaurant/Restaurant'
import UserProflie from '../pages/user/userProfile/UserProfile'
import UserRestaurant from '../pages/userRestaurant/UserRestaurant'
import { PrivateRoute } from './privateRoutes'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} progress/>
        <Route path="/registro" element={<Register />} />
        <Route path="/restaurantes" element={<PrivateRoute />}>
          <Route path="/restaurantes" element={<SearchRestaurant />} />
        </Route>
        <Route path="/restaurantes/restaurante/:id" element={<PrivateRoute />}>
          <Route path="/restaurantes/restaurante/:id" element={<Restaurant />} />
        </Route>
        <Route path="/preferencias" element={<PrivateRoute />}>
          <Route path="/preferencias" element={<UserProflie />} />
        </Route>
        <Route path="/restaurante" element={<PrivateRoute />}>
          <Route path="/restaurante" element={<UserRestaurant />} />
        </Route>
      </Routes>
    </Router>
  )
}
