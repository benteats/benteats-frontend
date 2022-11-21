import { paletteColors, borderRadius } from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1700px) {
    h1 {
      font-size: 3em;
    }
  }
`

export const Title = styled('h1')`
  color: ${paletteColors.primaryText};
  font-family: 'Inter', sans-serif;
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1em;
  text-align: center;
`

export const DescriptionText = styled('p')`
  text-align: center;
  white-space: pre-line;
  padding: 1.75em 0;
`

export const BenefitsGrid = styled('div')`
  width: 100%;
  display: grid;
  gap: 5em;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  @media screen and (max-width: 1700px) {
    gap: 2em;
  }
  @media screen and (max-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 15em));
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

export const BenefitsItem = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 350px;
  svg {
    border-radius: ${borderRadius.globalBtn};
    padding: 1em;
    height: 4em;
    width: 4em;
    background: ${paletteColors.orange};
    color: ${paletteColors.white};
    box-shadow: 0px 10px 22px -2px ${paletteColors.orangeShadow};
  }
  h2 {
    padding: 0.25rem 0;
    font-size: 1.5em;
    letter-spacing: 0.25px;
    color: ${paletteColors.primaryText};
    text-align: center;
  }
  p {
    font-size: 1em;
    text-align: center;
    color: ${paletteColors.secondaryText};
  }
  @media screen and (max-width: 1400px) {
    max-width: 250px;
    h2 {
      font-size: 1.25em;
    }
    svg {
      height: 3em;
      width: 3em;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    justify-content: space-evenly;
    svg {
      padding: 1.5em;
      height: 5em;
      width: 5em;
    }
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    max-width: 20em;
    p {
      font-size: 18px;
    }
  }
`
