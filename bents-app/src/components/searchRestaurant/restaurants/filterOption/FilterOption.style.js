import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow
} from '../../../../styles/Root'
import styled from '@emotion/styled'

export const resultRestaurant = styled('span')`
  font-family: 'Poppins', sans-serif;
  font-size: ${fontSize.smText};
  font-weight: 400;
  letter-spacing: 0.25px;
  color: ${paletteColors.black};
`

export const filterButton = styled('button')`
  transition: ease all 100ms;
  font-size: ${fontSize.smSubText};
  font-weight: 400;
  background: ${paletteColors.white};
  border: 1px solid ${paletteColors.grayBorder};
  border-radius: ${borderRadius.checkboxIcon};
  outline: none;
  cursor: pointer;
  color: ${paletteColors.black};
  width: fit-content;
  padding: 8px 15px;
  &:hover {
    border: 1px solid ${paletteColors.black};
  }
`

export const ContainerButton = styled('div')`
  padding: 1.25em 0;
  display: flex;
  gap: 0.5rem;
`
