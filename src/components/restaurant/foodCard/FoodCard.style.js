import { fontSize, paletteColors } from '../../../styles/Root'
import styled from '@emotion/styled'

export const FoodCardContainer = styled('div')`
  width: 100%;
  height: auto;
  border-radius: 1em;
  border: solid 1px ${paletteColors.grayBorder};
`

export const FoodCardContent = styled('div')`
  display: flex;
  flex-direction: column;
`

export const FoodCardImage = styled('div')`
  border-radius: 1em 1em 0 0;
  width: 100%;
  img {
    border-radius: 1em 1em 0 0;
    height: 300px;
    width: 100%;
    display: block;
  }
`

export const FoodCardData = styled('div')`
  padding: 1em;
  p {
    font-size: ${fontSize.smText};
    color: ${paletteColors.descriptionMenu};
    letter-spacing: 0.25px;
  }
  h2 {
    color: ${paletteColors.moneyGreen};
  }
`

export const Price = styled('span')`
  color: #1cc92e;
  font-size: ${paletteColors.lgText};
  font-weight: 600;
`
