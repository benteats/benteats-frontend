import { fontSize, paletteColors, shadow, border } from '../../../styles/Root'
import styled from '@emotion/styled'

export const FoodCardContent = styled('div')`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  ${shadow.menuCard}
  ${border.menuCard}
  @media screen and (max-width: 1020px) {
    display: grid;
    grid-template-columns: 40% 60%;
  }
`

export const FoodCardImage = styled('div')`
  width: 100%;
  img {
    border-radius: 8px 8px 0 0;
    height: 300px;
    width: 100%;
    display: block;
    object-fit: cover;
    @media screen and (max-width: 1020px) {
      border-radius: 8px;
      height: 100%;
    }
  }
`

export const FoodCardData = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1em;
  h1 {
    font-size: ${fontSize.smSubTitle};
    font-weight: 600;
  }
  p {
    font-size: ${fontSize.smText};
    color: ${paletteColors.descriptionMenu};
    letter-spacing: 0.25px;
    line-height: 1.65em;
  }
  @media screen and (max-width: 1020px) {
    p {
      font-size: ${fontSize.mdText};
    }
    padding: 1em 1em 1em 1.75em;
  }
`

export const Price = styled('span')`
  color: #1cc92e;
  font-size: ${fontSize.dfSubTitle};
  font-weight: 600;
`

export const Container = styled('div')`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
  @media screen and (max-width: 1020px) {
    grid-template-columns: none;
  }
`
