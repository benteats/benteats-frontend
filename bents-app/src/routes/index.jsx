import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import SearchRestaurant from '../pages/searchRestaurant/SearchRestaurant'
import Restaurant from '../pages/restaurant/Restaurant'
import { PrivateRoute } from './privateRoutes'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/restaurantes" element={<PrivateRoute />}>
          <Route path="/restaurantes" element={<SearchRestaurant />} />
        </Route>
        <Route path="/restaurantes/restaurante/:id" element={<PrivateRoute />}>
          <Route path="/restaurantes/restaurante/:id" element={<Restaurant />} />
        </Route>
      </Routes>
    </Router>
  )
}
