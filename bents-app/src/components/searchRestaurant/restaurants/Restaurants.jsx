import RestaurantItem from './restaurantItem/RestaurantItem'
import FilterOption from './filterOption/FilterOption'
import * as RestaurantStyle from './Restaurant.style'

export default function Restaurants({ restaurantsResult }) {
  return (
    <>
      <RestaurantStyle.Container>
        <FilterOption />
        {restaurantsResult.map(
        ({
          name,
          address,
          foodType,
          priceAverage,
          openingTime,
          addressNumber,
          description
        }) => (
          <RestaurantItem
          key={name}
          name={name}
          address={address}
          foodType={foodType}
          priceAverage={priceAverage}
          openingTime={openingTime}
          addressNumber={addressNumber}
          description={description}
          />
        )
      )}
      </RestaurantStyle.Container>
    </>
  )
}
