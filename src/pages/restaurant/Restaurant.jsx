import RestaurantPhoto from '../../components/restaurant/restaurantPhoto/RestaurantPhoto'
import * as RestaurantStyle from './Restaurant.style'
import { FilterButton } from '../../styles/Global'
import { FaStar } from 'react-icons/fa'
import AppSimpleNavbar from '../../components/searchRestaurant/navBar/AppSimpleNavbar'
import { api } from '../../api/axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import filterList from './RestaurantFilterList'
import RestaurantDetail from '../../components/restaurant/restaurantDetail/RestaurantDetail'
import FoodCard from '../../components/restaurant/foodCard/FoodCard'
import AvaliationCard from '../../components/restaurant/avaliationCard/AvaliationCard'

export default function Restaurant() {
  const [isClicked, setIsClicked] = useState({ id: 1, isClicked: true })
  const [restaurantsResult, setRestaurantsResult] = useState(null)
  const [restaurantStep, setRestaurantStep] = useState(null)
  const params = useParams()
  const restaurantId = params.id

  async function getRestaurantById() {
    try {
      const response = await api.get(
        `/restaurants/getRestaurantById/${restaurantId}`
      )
      setRestaurantsResult(response.data)
    } catch (e) {
      console.error('error getRestaurantByCoordinates =>', e)
    }
  }

  const handleClickFilter = item => {
    setIsClicked({
      id: item.id,
      clicked: true
    })
  }

  const restaurantCurrentStep = () => {
    const currentStep = isClicked.id
    if (currentStep == 1) {
      return <RestaurantDetail restaurantsResult={restaurantsResult} />
    }
    if (currentStep == 2) {
      return <FoodCard />
    }
    if (currentStep == 3) {
      return <AvaliationCard />
    }
  }

  useEffect(() => {
    if (restaurantsResult == null) {
      getRestaurantById()
    }
  }, [])

  return (
    <>
      {restaurantsResult && (
        <RestaurantStyle.Container>
          <AppSimpleNavbar />
          <RestaurantStyle.Content>
            <RestaurantPhoto params={restaurantId} />
            <RestaurantStyle.RestaurantTitle>
              <div>
                <h2>{restaurantsResult.user.name}</h2>
                <FaStar />
                <span>5,0</span>
              </div>
              <span>
                {restaurantsResult.user.address},{' '}
                {restaurantsResult.user.addressNumber}{' '}
              </span>
            </RestaurantStyle.RestaurantTitle>
            <RestaurantStyle.RestaurantOptions>
              {filterList.map(item => {
                return (
                  <FilterButton
                    key={item.id}
                    onClick={() => handleClickFilter(item)}
                    className={isClicked.id == item.id ? 'clicked' : ''}
                  >
                    {item.label}
                  </FilterButton>
                )
              })}
            </RestaurantStyle.RestaurantOptions>
            {restaurantCurrentStep()}
          </RestaurantStyle.Content>
        </RestaurantStyle.Container>
      )}
    </>
  )
}
