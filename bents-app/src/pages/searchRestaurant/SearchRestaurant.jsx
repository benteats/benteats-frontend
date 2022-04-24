import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Map from '../../components/searchRestaurant/map/Map'
import AppNavbar from '../../components/searchRestaurant/navBar/AppNavBar'
import Restaurants from '../../components/searchRestaurant/restaurants/Restaurants'
import * as SearchStyle from './SearchRestaurant.style'
import axios from 'axios'


export default function SearchRestaurant() {
  let navigate = useNavigate()
  const [searchPlace, setSearchPlace] = useState({
    longitude: '',
    latitude: '',
    zoom: 14
  })

  async function authUser() {
    try {
      const response = await axios.get(`http://localhost:8080/users/authenticateSession/${localStorage.idUser}`)
      if(!response.data) {
        navigate('/login')
      }
    } catch (e) {
      console.error('error authUser =>', e)
      navigate('/login')
    }
  }

  useEffect(() => {    
    authUser()
  });

  return (
    <>
      <AppNavbar searchPlace={searchPlace} setSearchPlace={setSearchPlace} />
      <SearchStyle.Container>
        <Map searchPlace={searchPlace} />
        <Restaurants />
      </SearchStyle.Container>
    </>
  )
}
