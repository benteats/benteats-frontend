import { useState, useEffect } from 'react'
import Map from '../../components/searchRestaurant/map/Map'
import AppNavbar from '../../components/searchRestaurant/navBar/AppNavBar'
import Restaurants from '../../components/searchRestaurant/restaurants/Restaurants'
import RestaurantNotFound from '../../components/searchRestaurant/restaurants/restaurantNotFound/RestaurantNotFound'
import * as SearchStyle from './SearchRestaurant.style'

export default function SearchRestaurant() {
  const [restaurantsResult, setRestaurantsResult] = useState(null)
  const [searchPlace, setSearchPlace] = useState({
    longitude: -46.661259,
    latitude: -23.557492,
    zoom: 14
  })
  const restaurantDetail = {
    title: 'Ooops! Ainda não chegamos na sua região',
    description: `Nos informe se você é um Usuário em busca de novos locais e
            opiniôes. Ou um empreendedor querendo melhorar através de feedbacks.`
  }

  return (
    <>
      <AppNavbar
        searchPlace={searchPlace}
        setSearchPlace={setSearchPlace}
        restaurantsResult={restaurantsResult}
        setRestaurantsResult={setRestaurantsResult}
      />
      <SearchStyle.Container>
        <Map searchPlace={searchPlace} restaurantsResult={restaurantsResult} />
        {restaurantsResult ? (
          <Restaurants restaurantsResult={restaurantsResult} />
        ) : (
          <RestaurantNotFound restaurantDetail={restaurantDetail} />
        )}
      </SearchStyle.Container>
    </>
  )
}
