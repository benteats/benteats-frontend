import Map from '../../components/searchRestaurant/map/Map'
import AppNavbar from '../../components/searchRestaurant/navBar/AppNavBar'
import * as SearchStyle from './SearchRestaurant.style'


export default function SearchRestaurant() {
  return (
    <>
      <AppNavbar />
      <SearchStyle.Container>
        <Map />
      </SearchStyle.Container>
    </>
  )
}
