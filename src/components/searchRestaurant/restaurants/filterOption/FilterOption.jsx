import * as FilterOptionStyle from './FilterOption.style'
import { FilterButton } from '../../../../styles/Global'
import { filterOptions } from './FilterOptionMap'

export default function FilterOption({ restaurantsResult }) {
  return (
    <>
      <FilterOptionStyle.resultRestaurant>
        {restaurantsResult.length} Restaurantes próximos a você
      </FilterOptionStyle.resultRestaurant>
      <FilterOptionStyle.ContainerButton>
        {filterOptions.map((element, item) => (
          <FilterButton key={item}>
            {element.value}
          </FilterButton>
        ))}
      </FilterOptionStyle.ContainerButton>
    </>
  )
}
