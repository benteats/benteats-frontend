import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow
} from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  padding: 75px 1em 1em 1em;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  h1{
    font-size: 18px;
  }
`

export const Item = styled('div')`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5em;
`

export const Detail = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Img = styled('img')`
  width: 100%;
  border-radius: ${borderRadius.homeSvg};
`

export const Title = styled('h1')`
  font-size: 24px;
  color: ${paletteColors.primaryText};
`

export const Address = styled('span')`
  font-size: ${fontSize.smSubText};
  font-weight: 600;
  color: ${paletteColors.gray};

`

export const Desc = styled('p')`
  font-size: ${fontSize.smSubText};
  color: ${paletteColors.secondaryText};
`

export const RateContainer = styled('div')`
  color: ${paletteColors.orange};
`

export const Info = styled('div')`

`
