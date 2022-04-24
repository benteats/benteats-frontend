import * as FilterOptionStyle from './FilterOption.style'
import { filterOptions } from './FilterOptionMap'

export default function FilterOption() {
  return (
    <>
      <FilterOptionStyle.resultRestaurant>
        +50 Restaurantes próximos a você
      </FilterOptionStyle.resultRestaurant>
      <FilterOptionStyle.ContainerButton>
        {filterOptions.map((element, item) => (
          <FilterOptionStyle.filterButton key={item}>
            {element.value}
          </FilterOptionStyle.filterButton>
        ))}
      </FilterOptionStyle.ContainerButton>
    </>
  )
}
