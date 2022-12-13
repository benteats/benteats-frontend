import styled from '@emotion/styled'
import { fontSize, paletteColors } from '../../../styles/Root'

export const Container = styled('div')`
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 3em;
  @media screen and (max-width: 980px) {
    grid-template-columns: none;
  }
`

export const AvaliationCardContainer = styled('div')`
  width: 100%;
  height: auto;
`

export const AvaliationCardContent = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const AvaliationCardImage = styled('figure')`
  width: 60px;
  border-radius: 25%;
  svg {
    height: 3.5em;
    width: 3.5em;
    object-fit: cover;
  }
`

export const AvaliationCardRating = styled('div')`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.15rem;
  p {
    font-size: ${fontSize.smText};
  }
  svg {
    font-size: ${fontSize.dfSubTitle};
    color: ${paletteColors.orange};
  }
`

export const AvaliationCardHeader = styled('div')`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`

export const AvaliationCardData = styled('div')`
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 500;
    color: ${paletteColors.primaryText};
    font-size: ${fontSize.lgText};
  }
  p {
    color: ${paletteColors.secondaryText};
    font-size: ${fontSize.smSubText};
    font-weight: 500;
  }
`

export const AvaliationCardMessage = styled('div')`
  margin-top: 0.5em;
  p {
    color: ${paletteColors.secondaryText};
    font-size: ${fontSize.smText};
    letter-spacing: 0.25px;
    line-height: 2em;
  }
`
