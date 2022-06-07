import RestaurantPhoto from '../../components/restaurant/restaurantPhoto/RestaurantPhoto';
import * as RestaurantStyle from './Restaurant.style'
import { FilterButton } from '../../styles/Global';
import { FaStar } from 'react-icons/fa'
import { GrRestaurant } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'
import AppSimpleNavbar from '../../components/searchRestaurant/navBar/AppSimpleNavbar';
import { axiosPrivate } from '../../api/axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


export default function Restaurant() {
  const [restaurantsResult, setRestaurantsResult] = useState(null)
  const params = useParams()

  async function getRestaurantById() {
    try {
      const response = await axiosPrivate.get(
        `/restaurants/getRestaurantById/${params.id}`
      )
      setRestaurantsResult(response.data)
    } catch (e) {
      console.error('error getRestaurantByCoordinates =>', e)
    }
  }

  useEffect(() => {
    getRestaurantById()
  }, [])

  return (
    <>
    <AppSimpleNavbar />
    <RestaurantStyle.Container>
      <RestaurantStyle.Content>
        <RestaurantPhoto />
        <RestaurantStyle.RestaurantTitle>
          <div>
            <h2>Abbraccio Cucina Italiano</h2>
            <FaStar />
            <span>5,0</span>
          </div>
          <span>Rua Olimpíadas, 360 - Vila Olímpia</span>
        </RestaurantStyle.RestaurantTitle>
        <RestaurantStyle.RestaurantOptions>
          <FilterButton>Informações</FilterButton>
          <FilterButton>Cardápio</FilterButton>
          <FilterButton>Avaliações</FilterButton>
        </RestaurantStyle.RestaurantOptions>
        <RestaurantStyle.RestaurantDetail>
          <RestaurantStyle.ContainerDetail>
            <RestaurantStyle.RestaurantDetailItem>
              <div>
                <GrRestaurant />
              </div>
              <div>
                <h3>Tipo de Culinária</h3>
                <span>Italiana</span>
              </div>
            </RestaurantStyle.RestaurantDetailItem>
            <RestaurantStyle.RestaurantDetailItem>
              <div>
                <FiClock />
              </div>
              <div>
                <h3>Horário</h3>
                <span>12:00 - 22:30</span>
              </div>
            </RestaurantStyle.RestaurantDetailItem>
            <RestaurantStyle.RestaurantDetailItem>
              <div>
                <AiOutlineDollarCircle />
              </div>
              <div>
                <h3>Média de Preço</h3>
                <span>R$ 150 - R$ 300</span>
              </div>
            </RestaurantStyle.RestaurantDetailItem>
            <RestaurantStyle.RestaurantDetailItem>
              <div>
                <BiChat />
              </div>
              <div>
                <h3>Avaliações</h3>
                <span>+2.535</span>
              </div>
            </RestaurantStyle.RestaurantDetailItem>
          </RestaurantStyle.ContainerDetail>
        </RestaurantStyle.RestaurantDetail>
        <RestaurantStyle.Description>
          <RestaurantStyle.Subtitle>
            Sobre este restaurante
          </RestaurantStyle.Subtitle>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </RestaurantStyle.Description>
      </RestaurantStyle.Content>
    </RestaurantStyle.Container>
    </>
  )
}
