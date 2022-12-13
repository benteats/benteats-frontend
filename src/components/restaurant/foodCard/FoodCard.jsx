import * as FoodCardStyle from './FoodCard.style'
import RestaurantNotFound from '../../../components/searchRestaurant/restaurants/restaurantNotFound/RestaurantNotFound'

export default function FoodCard({ foodResult }) {
  return (
    <>
      <FoodCardStyle.Container>
        {foodResult ? (
          foodResult.map(item => {
            return (
              <FoodCardStyle.FoodCardContent key={item.id}>
                <FoodCardStyle.FoodCardImage>
                  <img src="https://img.itdg.com.br/tdg/images/recipes/000/138/558/325115/325115_original.jpg?mode=crop&width=710&height=400" />
                </FoodCardStyle.FoodCardImage>
                <FoodCardStyle.FoodCardData>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <FoodCardStyle.Price>{item.price}</FoodCardStyle.Price>
                </FoodCardStyle.FoodCardData>
              </FoodCardStyle.FoodCardContent>
            )
          })
        ) : (
          <RestaurantNotFound />
        )}
      </FoodCardStyle.Container>
    </>
  )
}
