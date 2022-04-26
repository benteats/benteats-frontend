import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Map from '../../components/searchRestaurant/map/Map'
import AppNavbar from '../../components/searchRestaurant/navBar/AppNavBar'
import Restaurants from '../../components/searchRestaurant/restaurants/Restaurants'
import RestaurantNotFound from '../../components/searchRestaurant/restaurants/restaurantNotFound/RestaurantNotFound'
import * as SearchStyle from './SearchRestaurant.style'
import axios from 'axios'

export default function SearchRestaurant() {
  let navigate = useNavigate()
  const [restaurantsResult, setRestaurantsResult] = useState(null)
  const [searchPlace, setSearchPlace] = useState({
    longitude: -46.661259,
    latitude: -23.557492,
    zoom: 14
  })

  async function authUser() {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/authenticateSession/${localStorage.idUser}`
      )
      if (!response.data) {
        navigate('/login')
      }
    } catch (e) {
      console.error('error authUser =>', e)
      navigate('/login')
    }
  }

  async function getRestaurantByCoordinates(latitude, longitude) {
    console.log('getRestaurantByCoordinates')
    try {
      const response = await axios.get(
        `http://localhost:8080/restaurants/getRestaurantByCoordinates/${latitude}/${longitude}`
      )
      console.log('respose => ',response.data)
      setRestaurantsResult(response.data)
      console.log('restaurantsResult =>',restaurantsResult)
    } catch (e) {
      console.error('error getRestaurantByCoordinates =>', e)
    }
  }

  useEffect(() => {
    authUser()
  })

  useEffect(() => {
    authUser()    
    if (!restaurantsResult) {      
      getRestaurantByCoordinates(searchPlace.latitude, searchPlace.longitude)      
    }
  }, [restaurantsResult])

  return (
    <>
      <AppNavbar
        searchPlace={searchPlace}
        setSearchPlace={setSearchPlace}
        restaurantsResult={restaurantsResult}
        setRestaurantsResult={setRestaurantsResult}
      />
      <SearchStyle.Container>
        <Map searchPlace={searchPlace} restaurantsResult={restaurantsResult}/>
        {restaurantsResult ? <Restaurants restaurantsResult={restaurantsResult}/> : <RestaurantNotFound />}
      </SearchStyle.Container>
    </>
  )
}
