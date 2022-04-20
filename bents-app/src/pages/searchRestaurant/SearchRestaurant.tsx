import { useState } from 'react'
import Map from '../../components/searchRestaurant/map/Map'
import AppNavbar from '../../components/searchRestaurant/navBar/AppNavBar'
import * as SearchStyle from './SearchRestaurant.style'

export default function SearchRestaurant() {
  const [searchPlace, setSearchPlace] = useState({
    longitude: '',
    latitude: '',
    zoom: 10
  })

  return (
    <>
      <AppNavbar searchPlace={searchPlace} setSearchPlace={setSearchPlace} />
      <SearchStyle.Container>
        <Map searchPlace={searchPlace} />
      </SearchStyle.Container>
    </>
  )
}
