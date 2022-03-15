import { paletteColors, borderRadius, fontSize } from '../../Root'
import styled from '@emotion/styled'

export const Container = styled('div')`  
  display: flex;
  gap: 2em;
  align-items: center;
  @media screen and (max-width: 768px){ 
    text-align: center;
    display: flex;
    flex-direction: column;
   }
`

export const TutorialTitle = styled('h1')`
  color: ${paletteColors.primaryText};
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: clamp(2em,3vw,4em);
  letter-spacing: 0.75px;
  white-space: pre-line;
  @media screen and (max-width: 768px){ font-size: 2em; }
`

export const TutorialDescription = styled('p')`
  color: ${paletteColors.secondaryText};
  letter-spacing: 0.25px;
  line-height: 1.75em;
  font-size: clamp(14px,1vw,16px);
  white-space: pre-line;
  padding: 2em 0;
  @media screen and (max-width: 768px){ 
    white-space: unset;
    font-size: 1.25em; 
  }
`

export const TutorialTitleContainer = styled('div')`
  
`

export const HeroSVGContainer = styled('div')`
  svg {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px){
    width: 100%;    
    svg{
      height: 30vh;
    }
  }
`
export const SolutionGrid = styled('div')`
  display: flex;
  
  @media screen and (max-width: 1700px){ gap: 2em; }
  @media screen and (max-width: 1080px){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 25em));
    justify-content: space-between;
  }
  @media screen and (max-width: 768px){
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(auto, 15em));        
  }
  @media screen and (max-width: 600px){
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
    height: 20em;
    width: 20em;
  }
  h3 {
    padding: .25rem 0;
    font-size: ${fontSize.mdText};
    color: ${paletteColors.primary};
  }
  h2 {
    padding: .25rem 0;
    font-size: ${fontSize.smSubTitle};
    letter-spacing: 0.25px;
    color: ${paletteColors.primaryText};
  }
  p {
    font-size: ${fontSize.mdText};
    color: ${paletteColors.secondaryText};
  }
  `
