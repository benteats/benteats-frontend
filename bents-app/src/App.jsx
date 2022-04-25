import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import SearchRestaurant from './pages/searchRestaurant/SearchRestaurant'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/searchRestaurant" element={<SearchRestaurant />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
