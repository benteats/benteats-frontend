import { paletteColors, borderRadius } from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`

export const HeroTitle = styled('h1')`
  color: ${paletteColors.primaryText};
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: clamp(4em, 5vw, 6em);
  letter-spacing: 0.75px;
  white-space: pre-line;
  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
`

export const HeroDescription = styled('p')`
  color: ${paletteColors.secondaryText};
  letter-spacing: 0.25px;
  line-height: 1.75em;
  font-size: clamp(14px, 1vw, 16px);
  white-space: pre-line;
  padding: 2em 0;
  @media screen and (max-width: 768px) {
    white-space: unset;
    font-size: 1.25em;
  }
`

export const HeroTitleContainer = styled('div')``

export const HeroSVGContainer = styled('div')`
  svg {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    svg {
      height: 30vh;
    }
  }
`
