import * as RestaurantStyle from '../Restaurant.style'
import { FaStar } from 'react-icons/fa'
import { GrRestaurant } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'

export default function RestaurantItem({
  name,
  address,
  foodType,
  priceAverage,
  openingTime,
  addressNumber,
  description,
  imgUrl
}) {    
  return (
    <>
      <RestaurantStyle.Item>
        <RestaurantStyle.ContainerImg>
          <RestaurantStyle.Img src={imgUrl} />
        </RestaurantStyle.ContainerImg>
        <RestaurantStyle.Detail>
          <RestaurantStyle.ContainerTitle>
            <RestaurantStyle.Title>
            {name}
            </RestaurantStyle.Title>
            <RestaurantStyle.RateContainer>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </RestaurantStyle.RateContainer>
          </RestaurantStyle.ContainerTitle>
          <RestaurantStyle.Address>
            {address}
          </RestaurantStyle.Address>
          <RestaurantStyle.Desc>
            {`${description}`}
          </RestaurantStyle.Desc>
          <RestaurantStyle.Info>
            <RestaurantStyle.InfoItem>
              <GrRestaurant />
              <span>{foodType}</span>
            </RestaurantStyle.InfoItem>
            <RestaurantStyle.InfoItem>
              <AiOutlineDollarCircle />
              <span>{priceAverage}</span>
            </RestaurantStyle.InfoItem>
            <RestaurantStyle.InfoItem>
              <FiClock />
              <span>{openingTime}</span>
            </RestaurantStyle.InfoItem>
            <RestaurantStyle.InfoItem>
              <BiChat />
              <span>+2.500</span>
            </RestaurantStyle.InfoItem>
          </RestaurantStyle.Info>
        </RestaurantStyle.Detail>
      </RestaurantStyle.Item>
    </>
  )
}
