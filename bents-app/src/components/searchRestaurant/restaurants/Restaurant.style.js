import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow
} from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  padding: 80px 1em 1em 1em;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    font-size: ${fontSize.lgText};
  }
`

export const Item = styled('div')`
  max-height: 250px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1.5em;
  cursor: pointer;
  padding: 20px 35px 20px 10px;
  border-top: 1px solid ${paletteColors.lightGrayBorder};
  border-bottom: 1px solid ${paletteColors.lightGrayBorder};
  @media screen and (max-width: 1366px) {
    padding: 20px 10px 20px 10px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-height: 100%;
  }
`

export const Detail = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContainerImg = styled('div')`
  max-width: 300px;
  height: 195px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: fit-content;
  }
`

export const Img = styled('img')`
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius.imgRestaurant};
`

export const ContainerTitle = styled('div')`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.25rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: .5rem;
  }
`

export const Title = styled('h1')`
  font-family: 'Inter', sans-serif;
  font-size: ${fontSize.dfSubTitle} !important;
  color: ${paletteColors.primaryText};
`

export const Address = styled('span')`
  font-family: 'Inter', sans-serif;
  font-size: ${fontSize.smSubText};
  font-weight: 600;
  color: ${paletteColors.gray};
`

export const Desc = styled('p')`
  padding: 0.5rem 0 0 0;
  font-size: ${fontSize.smSubText};
  color: ${paletteColors.secondaryText};
`

export const RateContainer = styled('div')`
  color: ${paletteColors.orange};
  svg {
    font-size: ${fontSize.dfSubTitle};
    margin-right: 5px;
  }
`

export const Info = styled('div')`
  display: flex;
  padding-top: 25px;
  @media screen and (max-width: 520px) {
    display: grid;
    grid-template-areas: 'a a';
    justify-content: space-between;
    gap: 1em;
  }
`

export const InfoItem = styled('div')`
  display: flex;
  align-items: center;
  border-right: 1px solid ${paletteColors.grayBorder};
  gap: 7px;
  margin-right: 9px;
  svg {
    font-size: ${fontSize.lgText};
    color: ${paletteColors.primary};
    path {
      stroke: ${paletteColors.primary};
    }
  }
  span {
    font-size: ${fontSize.smSubText};
    font-weight: 500;
    color: ${paletteColors.secondaryText};
    padding-right: 9px;
  }
  @media screen and (max-width: 520px) {
    border: none;
  }
`
