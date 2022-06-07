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

export const ContainerButton = styled('div')`
  padding: 1.25em 0;
  display: flex;
  gap: 0.5rem;
`
