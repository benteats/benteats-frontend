import RestaurantPhoto from '../../components/restaurant/restaurantPhoto/RestaurantPhoto';
import * as RestaurantStyle from './Restaurant.style'
import { FilterButton } from '../../styles/Global';
import { FaStar } from 'react-icons/fa'
import { GrRestaurant } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'

export default function Restaurant() {
  return (
    <>
      <RestaurantStyle.Container>
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
          <GrRestaurant />
          <AiOutlineDollarCircle />
          <FiClock />
          <BiChat />
        </RestaurantStyle.RestaurantDetail>
      </RestaurantStyle.Container>
    </>
  )
}
