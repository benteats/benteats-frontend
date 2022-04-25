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
  font-weight: 500;
  letter-spacing: 0.25px;
  color: ${paletteColors.gray};
`

export const filterButton = styled('button')`
  font-family: 'Poppins', sans-serif;
  font-size: ${fontSize.smSubText};
  font-weight: 500;
  background: ${paletteColors.white};
  border: 2px solid ${paletteColors.grayBorder};
  border-radius: 9px;
  outline: none;
  cursor: pointer;
  color: ${paletteColors.gray};
  width: fit-content;
  padding: 3px 10px;
`

export const ContainerButton = styled('div')`
  padding: 1.25em 0;
  display: flex;
  gap: 0.5rem;
`
