import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const TutorialTitle = styled('h1')`
  color: ${paletteColors.primaryText};
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: clamp(2em, 3vw, 4em);
  letter-spacing: 0.75px;
  white-space: pre-line;
  @media screen and (max-width: 768px) {
    font-size: 2em;
  }
`

export const TutorialDescription = styled('p')`
  max-width: 550px;
  color: ${paletteColors.secondaryText};
  letter-spacing: 0.25px;
  line-height: 1.75em;
  font-size: clamp(14px, 1vw, 16px);
  white-space: pre-line;
  padding: 0.5rem 0;
  @media screen and (max-width: 768px) {
    white-space: unset;
    font-size: 1.25em;
  }
`

export const TutorialTitleContainer = styled('div')``

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
export const SolutionGrid = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
`

export const SolutionItem = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 30vh;
  width: 100%;
  svg {
    border-radius: ${borderRadius.globalBtn};
    height: auto;
    width: 100%;
  }
  h3 {
    padding: 0.25rem 0;
    font-size: ${fontSize.mdText};
    color: ${paletteColors.primary};
  }
  h2 {
    padding: 0.25rem 0;
    font-size: ${fontSize.smSubTitle};
    letter-spacing: 0.25px;
    color: ${paletteColors.primaryText};
  }
  p {
    font-size: ${fontSize.mdText};
    color: ${paletteColors.secondaryText};
  }
`
