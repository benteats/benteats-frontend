import RestaurantPhoto from '../../components/restaurant/restaurantPhoto/RestaurantPhoto'
import * as RestaurantStyle from '../restaurant/Restaurant.style'
import { FilterButton, UploadLabel } from '../../styles/Global'
import { FaStar } from 'react-icons/fa'
import { GrRestaurant } from 'react-icons/gr'
import { AiOutlineDollarCircle, AiOutlineCloudUpload } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'
import AppSimpleNavbar from '../../components/searchRestaurant/navBar/AppSimpleNavbar'
import { api } from '../../api/axios'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { URL_AZURE } from '../../constants/http.azure.request'
import filterList from '../../pages/restaurant/RestaurantFilterList'
import RestaurantDetail from '../../components/restaurant/restaurantDetail/RestaurantDetail'
import FoodCard from '../../components/restaurant/foodCard/FoodCard'
import AvaliationCard from '../../components/restaurant/avaliationCard/AvaliationCard'

export default function UserRestaurant() {
  const { userData } = useContext(AuthContext)
  const [isClicked, setIsClicked] = useState({ id: 1, isClicked: true })
  const [restaurantsResult, setRestaurantsResult] = useState(null)
  const [avaliationResult, setAvaliationResult] = useState(null)
  const [foodResult, setFoodResult] = useState(null)

  async function getRestaurantById() {
    try {
      const response = await api.get(
        `/restaurants/getRestaurantById/${userData.idRestaurant}`
      )
      setRestaurantsResult(response.data)
    } catch (e) {
      console.error('error getRestaurantByCoordinates =>', e)
    }
  }

  async function getAvaliationById() {
    try {
      const response = await api.get(
        `avaliations/getAvaliationsByIdRestaurant/${userData.idRestaurant}`
      )
      if (response.data.length > 0) {
        const respondeDescSortById = response.data.sort(
          (a, b) => b.idAvaliation - a.idAvaliation
        )
        setAvaliationResult(respondeDescSortById)
      }
    } catch (e) {
      console.error('error getAvaliationById =>', e)
    }
  }

  async function getMenuFoodById() {
    try {
      const response = await api.get(`foods/${userData.idRestaurant}`)
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
      return (
        <FoodCard
          foodResult={foodResult}
          setFoodResult={setFoodResult}
          idRestaurant={userData.idRestaurant}
          isOwner={true}
        />
      )
    }
    if (currentStep == 3) {
      return (
        <AvaliationCard
          avaliationResult={avaliationResult}
          setAvaliationResult={setAvaliationResult}
          restaurantId={userData.idRestaurant}
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
            <RestaurantPhoto params={userData.idRestaurant} />
            <RestaurantStyle.RestaurantTitle>
              <div>
                <h2>{restaurantsResult.user.name}</h2>
                <FaStar />
                <span>
                  {restaurantsResult.ratingAverage
                    ? restaurantsResult.ratingAverage
                    : 'Você ainda não possuí avaliações'}
                </span>
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
