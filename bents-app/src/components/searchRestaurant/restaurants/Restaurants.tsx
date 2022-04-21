import FilterOption from './filterOption/FilterOption'
import { FaStar } from 'react-icons/fa'
import * as RestaurantStyle from './Restaurant.style'

export default function Restaurants() {
  return (
    <>
      <RestaurantStyle.Container >
        <FilterOption />
        <RestaurantStyle.Item>
          <RestaurantStyle.Img src='https://cdn.fs.teachablecdn.com/puXkl4zpSGDTuQy4Nziz' />
          <RestaurantStyle.Detail>
            <RestaurantStyle.Title>Abbraccio Cucina Italiana</RestaurantStyle.Title>
            <RestaurantStyle.RateContainer>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </RestaurantStyle.RateContainer>
            <RestaurantStyle.Address>Rua Olimpíadas, 360 - Vila Olímpia</RestaurantStyle.Address>
            <RestaurantStyle.Desc>
              {`Restaurante italiano sofisticado com carta de vinhos e especializado em
              ravioli recheado com creme de lagosta.`}
            </RestaurantStyle.Desc>
            <RestaurantStyle.Info></RestaurantStyle.Info>
          </RestaurantStyle.Detail>
        </RestaurantStyle.Item>
      </RestaurantStyle.Container>
    </>
  )
}
