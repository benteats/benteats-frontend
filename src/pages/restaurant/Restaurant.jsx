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
  const [avaliationResult, setAvaliationResult] = useState(null)
  const [foodResult, setFoodResult] = useState(null)
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

  async function getAvaliationById() {
    try {
      const response = await api.get(
        `avaliations/getAvaliationsByIdRestaurant/${restaurantId}`
      )
      const respondeDescSortById = response.data.sort(
        (a, b) => b.idAvaliation - a.idAvaliation
      )
      setAvaliationResult(respondeDescSortById)
    } catch (e) {
      console.error('error getAvaliationById =>', e)
    }
  }

  async function getMenuFoodById() {
    try {
      const response = await api.get(`foods/${restaurantId}`)
      setFoodResult(response.data)
    } catch (e) {
      console.error('error getMenuFoodById =>', e)
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
      return <FoodCard foodResult={foodResult} />
    }
    if (currentStep == 3) {
      return (
        <AvaliationCard
          avaliationResult={avaliationResult}
          setAvaliationResult={setAvaliationResult}
          restaurantId={restaurantId}
        />
      )
    }
  }

  useEffect(() => {
    if (restaurantsResult == null) {
      getRestaurantById()
      getAvaliationById()
      getMenuFoodById()
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
                <span>{restaurantsResult.ratingAverage}</span>
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
