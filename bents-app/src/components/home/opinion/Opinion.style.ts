import { paletteColors, borderRadius } from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 2em 1em;
  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`

export const OpinionTitle = styled('h1')`
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: clamp(2em, 3vw, 4em);
  letter-spacing: 0.75px;
  white-space: pre-line;
  @media screen and (max-width: 768px) {
    font-size: 2em;
  }
`

export const OpinionDescription = styled('p')`
  color: white;
  letter-spacing: 0.25px;
  line-height: 1.75em;
  font-size: clamp(14px, 1vw, 16px);
  white-space: pre-line;
  padding: 2em 0;
  @media screen and (max-width: 768px) {
    white-space: unset;
    font-size: 1em;
  }
`

export const Button = styled('a')`
  font-size: 14px;
  display: inline-block;
  letter-spacing: 0.25px;
  background: white;
  color: ${paletteColors.primary};
  padding: 1rem 1.5em;
  border-radius: ${borderRadius.globalBtn};
  cursor: pointer;
  transition: all ease-in 100ms;
  &:hover {
    opacity: 0.85;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const OpinionTitleContainer = styled('div')``

export const OpinionSVGContainer = styled('div')`
  background-color: ${paletteColors.backgroundBlueImage};
  border-radius: ${borderRadius.homeSvg};
  svg {
    padding: 1em;
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
