import { ReactComponent as BentsLogo } from '../../../../assets/bents-mini.svg'
import * as RestaurantNotFoundStyle from './RestaurantNotFound.style'

export default function RestaurantNotFound({ restaurantDetail }) {
  return (
    <>
      <RestaurantNotFoundStyle.Container>
        <RestaurantNotFoundStyle.NotFoundContainer>
          <BentsLogo />
          <h1>{restaurantDetail.title}</h1>
          <p>{restaurantDetail.description}</p>
        </RestaurantNotFoundStyle.NotFoundContainer>
      </RestaurantNotFoundStyle.Container>
    </>
  )
}
