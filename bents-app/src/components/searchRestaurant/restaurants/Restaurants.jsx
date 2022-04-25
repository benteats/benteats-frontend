import RestaurantItem from './restaurantItem/RestaurantItem'
import FilterOption from './filterOption/FilterOption'
import * as RestaurantStyle from './Restaurant.style'

export default function Restaurants({ restaurantsResult }) {
  return (
    <>
      <RestaurantStyle.Container>
        <FilterOption restaurantsResult={restaurantsResult} />
        {restaurantsResult.map(
        ({
          name,
          address,
          foodType,
          priceAverage,
          openingTime,
          addressNumber,
          description,
          imgUrl
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
          imgUrl={imgUrl}
          />
        )
      )}
      </RestaurantStyle.Container>
    </>
  )
}
