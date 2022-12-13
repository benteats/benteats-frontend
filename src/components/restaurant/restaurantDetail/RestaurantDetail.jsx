import React from 'react'
import * as RestaurantStyle from './RestaurantDetail.style'
import { GrRestaurant } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'

export default function RestaurantDetail({ restaurantsResult }) {
  return (
    <>
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
          {/* <RestaurantStyle.RestaurantDetailItem>
            <div>
              <BiChat />
            </div>
            <div>
              <h3>Avaliações</h3>
              <span>{restaurantsResult.priceAverage}</span>
            </div>
          </RestaurantStyle.RestaurantDetailItem> */}
        </RestaurantStyle.ContainerDetail>
      </RestaurantStyle.RestaurantDetail>
      <RestaurantStyle.Description>
        <RestaurantStyle.Subtitle>
          Sobre este restaurante
        </RestaurantStyle.Subtitle>
        <p>{restaurantsResult.description}</p>
      </RestaurantStyle.Description>
    </>
  )
}
