import RestaurantPhoto from '../../components/restaurant/restaurantPhoto/RestaurantPhoto'
import * as RestaurantStyle from '../restaurant/Restaurant.style'
import { FilterButton } from '../../styles/Global'
import { FaStar } from 'react-icons/fa'
import { GrRestaurant } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'
import AppSimpleNavbar from '../../components/searchRestaurant/navBar/AppSimpleNavbar'
import { api } from '../../api/axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function UserRestaurant() {
  const [restaurantsResult, setRestaurantsResult] = useState(null)
  const params = useParams()

  async function getRestaurantById() {
    try {
      const response = await api.get(
        `/restaurants/getRestaurantById/8`
      )
      setRestaurantsResult(response.data)
    } catch (e) {
      console.error('error getRestaurantByCoordinates =>', e)
    }
  }

  useEffect(() => {
    if(restaurantsResult == null){
      getRestaurantById()
    }
  }, [])

  return (
    <>
    {restaurantsResult && (
      <RestaurantStyle.Container>
      <AppSimpleNavbar />
      <RestaurantStyle.Content>
        {/* <RestaurantPhoto params={params} /> */}
        <RestaurantStyle.RestaurantTitle>
          <div>
            <h2>{restaurantsResult.user.name}</h2>
            <FaStar />
            <span>5,0</span>
          </div>
          <span>{restaurantsResult.user.address}, {restaurantsResult.user.addressNumber} </span>
        </RestaurantStyle.RestaurantTitle>
        {/* <RestaurantStyle.RestaurantOptions>
          <FilterButton>Informações</FilterButton>
          <FilterButton>Cardápio</FilterButton>
          <FilterButton>Avaliações</FilterButton>
        </RestaurantStyle.RestaurantOptions> */}
        <RestaurantStyle.RestaurantDetail>
          <RestaurantStyle.ContainerDetail>
            <RestaurantStyle.RestaurantDetailItem>
              <div>
                <GrRestaurant />
              </div>
              <div>
                <h3>Tipo de Culinária</h3>
                <span>{restaurantsResult.foodType}</span>
              </div>
            </RestaurantStyle.RestaurantDetailItem>
            <RestaurantStyle.RestaurantDetailItem>
              <div>
                <FiClock />
              </div>
              <div>
                <h3>Horário</h3>
                <span>{restaurantsResult.closingTime}</span>
              </div>
            </RestaurantStyle.RestaurantDetailItem>
            <RestaurantStyle.RestaurantDetailItem>
              <div>
                <AiOutlineDollarCircle />
              </div>
              <div>
                <h3>Média de Preço</h3>
                <span>R$ {restaurantsResult.priceAverage}</span>
              </div>
            </RestaurantStyle.RestaurantDetailItem>
            <RestaurantStyle.RestaurantDetailItem>
              <div>
                <BiChat />
              </div>
              <div>
                <h3>Avaliações</h3>
                <span>{restaurantsResult.priceAverage}</span>
              </div>
            </RestaurantStyle.RestaurantDetailItem>
          </RestaurantStyle.ContainerDetail>
        </RestaurantStyle.RestaurantDetail>
        <RestaurantStyle.Description>
          <RestaurantStyle.Subtitle>
            Sobre este restaurante
          </RestaurantStyle.Subtitle>
          <p>{restaurantsResult.description}</p>
        </RestaurantStyle.Description>
      </RestaurantStyle.Content>
    </RestaurantStyle.Container>
    )}
    </>
  )
}
