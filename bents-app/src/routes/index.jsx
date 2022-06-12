import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import SearchRestaurant from '../pages/searchRestaurant/SearchRestaurant'
import Restaurant from '../pages/restaurant/Restaurant'
import UserProflie from '../pages/user/userProfile/UserProfile'
import { PrivateRoute } from './privateRoutes'
import { paletteColors } from '../styles/Root'

import ProgressBar from '@badrap/bar-of-progress'

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
        <Route path="/preferencias" element={<PrivateRoute />}>
          <Route path="/preferencias" element={<UserProflie />} />
        </Route>
      </Routes>
    </Router>
  )
}
