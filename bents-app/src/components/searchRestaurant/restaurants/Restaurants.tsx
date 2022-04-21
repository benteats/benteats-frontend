import FilterOption from './filterOption/FilterOption'
import { FaStar } from 'react-icons/fa'
import { GrRestaurant } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'
import * as RestaurantStyle from './Restaurant.style'

export default function Restaurants() {
  return (
    <>
      <RestaurantStyle.Container>
        <FilterOption />
        <RestaurantStyle.Item>
          <RestaurantStyle.ContainerImg>
            <RestaurantStyle.Img src="https://cdn.fs.teachablecdn.com/puXkl4zpSGDTuQy4Nziz" />
          </RestaurantStyle.ContainerImg>
          <RestaurantStyle.Detail>
            <RestaurantStyle.ContainerTitle>
              <RestaurantStyle.Title>
                Abbraccio Cucina Italiana
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
              Rua Olimpíadas, 360 - Vila Olímpia
            </RestaurantStyle.Address>
            <RestaurantStyle.Desc>
              {`Restaurante italiano sofisticado com carta de vinhos e especializado em
              ravioli recheado com creme de lagosta.`}
            </RestaurantStyle.Desc>
            <RestaurantStyle.Info>
              <RestaurantStyle.InfoItem>
                <GrRestaurant />
                <span>Italiano</span>
              </RestaurantStyle.InfoItem>
              <RestaurantStyle.InfoItem>
                <AiOutlineDollarCircle />
                <span>R$ 150 - R$ 300</span>
              </RestaurantStyle.InfoItem>
              <RestaurantStyle.InfoItem>
                <FiClock />
                <span>12:00 - 22:30</span>
              </RestaurantStyle.InfoItem>
              <RestaurantStyle.InfoItem>
                <BiChat />
                <span>+2.500</span>
              </RestaurantStyle.InfoItem>
            </RestaurantStyle.Info>
          </RestaurantStyle.Detail>
        </RestaurantStyle.Item>
      </RestaurantStyle.Container>
    </>
  )
}
