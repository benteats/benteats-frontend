import { paletteColors, borderRadius } from '../../Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  display: grid;
  gap: 10em;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1700px){ gap: 5em; }
`

export const ContainerSVG = styled('div')`
  background: #5D95F9;
  border-radius: 50px;
  svg {
    width: 100%;
    height: 100%;
  }
`

export const ContentSolutions = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4em;
  @media screen and (max-width: 1700px){ 
    h1{
      font-size: 3em;
    }
    gap: 0; 
    }
`

export const SolutionGrid = styled('div')`
  display: grid;
  grid-template-areas: 'a a';
  gap: 5em;
  @media screen and (max-width: 1700px){ gap: 2em; }
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
  h2 {
    padding: .25rem 0;
    font-size: 1.5em;
    letter-spacing: 0.25px;
    color: ${paletteColors.primaryText};
  }
  p {
    font-size: 1em;
    color: ${paletteColors.secondaryText};
  }
  @media screen and (max-width: 1400px){
    h2{ font-size: 1.25em; }
    svg{
      height: 3em;
      width: 3em;
    }
    p{ font-size: 14px; }
  }
`
