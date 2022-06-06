import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow
} from '../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RestaurantTitle = styled('div')`
  padding: 1em 0;
  width: 100%;
  div{
    display: flex;
    align-items: center;
    h2{
      font-size: ${fontSize.mdSubTitle};
      color: ${paletteColors.primaryText};
      margin-right: 0.75em;
    }
    svg{
      font-size: ${fontSize.dfSubTitle};
      color: ${paletteColors.orange};
      margin-right: .25rem;
    }
    span{
      font-family: 'Inter',sans-serif;
      font-size: ${paletteColors.mdSubTitle};
      color: ${paletteColors.secondaryText};
    }
  }
  span{
    font-size: ${fontSize.mdText};
    color: ${paletteColors.gray};
  }
`

export const RestaurantOptions = styled('div')`
  display: flex;
  gap: .5rem;
  width: 100%;
`
export const RestaurantDetail = styled('div')`
  width: 100%;
`
