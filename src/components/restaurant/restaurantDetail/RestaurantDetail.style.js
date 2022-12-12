import {
  paletteColors,
  borderRadius,
  fontSize,
  lineSize,
  border
} from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  padding: calc(70px + 1em) 40px 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled('div')`
  max-width: 1200px;
  width: 100%;
`

export const RestaurantTitle = styled('div')`
  padding: 1em 0;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    h2 {
      font-size: ${fontSize.mdSubTitle};
      color: ${paletteColors.primaryText};
      margin-right: 0.75em;
    }
    svg {
      font-size: ${fontSize.dfSubTitle};
      color: ${paletteColors.orange};
      margin-right: 0.25rem;
    }
    span {
      font-family: 'Inter', sans-serif;
      font-size: ${paletteColors.mdSubTitle};
      color: ${paletteColors.secondaryText};
    }
  }
  span {
    font-size: ${fontSize.mdText};
    color: ${paletteColors.gray};
  }
`

export const RestaurantOptions = styled('div')`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0em 1.5em 0em;
  ${border.dfBottom}
`

export const RestaurantDetail = styled('div')`
  padding: 2em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`

export const Subtitle = styled('h2')`
  color: ${paletteColors.primaryText};
  font-size: ${fontSize.smSubTitle};
  font-weight: 500;
`

export const ContainerDetail = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 20em);
  grid-gap: 1.5em;
`

export const RestaurantDetailItem = styled('div')`
  display: flex;
  align-items: center;
  gap: 1em;
  div {
    svg {
      font-size: ${fontSize.mdSubTitle};
      color: ${paletteColors.primary};
      path {
        stroke: ${paletteColors.primary};
      }
    }
    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      h3 {
        color: ${paletteColors.primaryText};
        font-size: ${fontSize.mdText};
        font-weight: 600;
      }
      span {
        font-size: ${fontSize.smText};
        color: ${paletteColors.secondaryText};
      }
    }
  }
`

export const Description = styled('div')`
  p {
    padding-top: 1em;
    color: ${paletteColors.secondaryText};
    font-size: ${fontSize.smText};
    line-height: ${lineSize.mdLine};
  }
  ${border.dfTop};
  ${border.dfBottom};
  padding: 2em 0;
`

export const UploadLabel = styled('label')`
  margin-left: 4em;
  transition: ease all 100ms;
  font-size: ${fontSize.smSubText};
  font-weight: 400;
  background: ${paletteColors.primary};
  border-radius: ${borderRadius.checkboxIcon};
  border: none;
  outline: none;
  cursor: pointer;
  color: ${paletteColors.white};
  width: fit-content;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    opacity: 0.9;
  }
  input[type='file'] {
    display: none;
  }
`

export const AvaliationsContainer = styled('div')`
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 30vh;
  gap: 3em;
  min-height: 30vh;
`

export const FoodCardContainer = styled('div')`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`
