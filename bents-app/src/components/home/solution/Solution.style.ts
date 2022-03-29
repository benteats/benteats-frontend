import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'

import styled from '@emotion/styled'

export const Container = styled('div')`
  width: 100%;
  display: grid;
  gap: 10em;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1700px) {
    gap: 5em;
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    div:first-of-type {
      text-align: center;
    }
  }
`

export const ContainerSVG = styled('div')`
  background: ${paletteColors.lightBlue};
  border-radius: ${borderRadius.homeSvg};
  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1080px) {
    display: none;
  }
`

export const ContentSolutions = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4em;
  @media screen and (max-width: 1700px) {
    h1 {
      font-size: 3em;
    }
    gap: 0;
  }
`

export const SolutionGrid = styled('div')`
  display: grid;
  grid-template-areas: 'a a';
  gap: 5em;
  @media screen and (max-width: 1700px) {
    gap: 2em;
  }
  @media screen and (max-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 25em));
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(auto, 15em));
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SolutionItem = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 500px;
  svg {
    border-radius: ${borderRadius.globalBtn};
    padding: 1em;
    height: 4em;
    width: 4em;
    background: ${paletteColors.orange};
    color: ${paletteColors.white};
    box-shadow: 0px 10px 22px -2px ${paletteColors.orangeShadow};
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
  @media screen and (max-width: 1400px) {
    svg {
      height: 3em;
      width: 3em;
    }
    p {
      font-size: ${fontSize.smText};
    }
  }
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    svg {
      padding: 1.5em;
      height: 5em;
      width: 5em;
    }
    h2 {
      font-size: ${fontSize.mdSubTitle};
    }
    p {
      font-size: ${fontSize.mdText};
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    max-width: 20em;
    p {
      font-size: ${fontSize.lgText};
    }
  }
`
