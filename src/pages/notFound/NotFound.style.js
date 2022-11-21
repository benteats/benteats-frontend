import styled from '@emotion/styled'
import { paletteColors, fontSize } from '../../styles/Root'

export const Container = styled('div')`
  height: calc(100vh - 102.5px);
  align-items: center;
  padding: 0 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 1em 0;
  }
  @media screen and (max-width: 768px) {
    padding: 1em 1.5em;
  }
`

export const ContentNotFound = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 1em 1.5em;
  }
`

export const NotFoundSubTitle = styled('h2')`
  font-size: 3em;
  font-weight: 700;
  color: ${paletteColors.primaryText};
  font-family: 'Inter', sans-serif;
  @media screen and (max-width: 1000px) {
    text-align: center;
    padding: 0.5rem 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 0em 0.5rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.5rem 2em;
  }
`

export const NotFoundImage = styled('figure')`
  height: 100%;
  display: flex;
  align-items: flex-end;
  svg {
    height: fit-content;
    width: 100%;
  }
  @media screen and (max-width: 980px) {
    display: none;
    width: 0;
  }
`

export const NotFoundTitle = styled('h1')`
  color: ${paletteColors.primaryText};
  font-size: 16em;
  font-family: 'Inter', sans-serif;
  @media screen and (max-width: 1380px) {
    font-size: 8em;
  }
  @media screen and (max-width: 1080px) {
    font-size: 6em;
  }
`

export const NotFoundDescription = styled('div')`
  @media screen and (max-width: 1000px) {
    align-items: center;
    justify-content: center;
  }
`

export const Description = styled('p')`
  width: 100%;
  max-width: 600px;
  padding: 1.75em 0;
  font-size: ${fontSize.mdText};
  line-height: 1.85em;
  letter-spacing: 0.25px;
  color: ${paletteColors.secondaryText};
  white-space: pre-line;
  @media screen and (max-width: 1000px) {
    text-align: center;
    padding: 15px;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5em 0.5rem;
  }
  @media screen and (max-width: 458px) {
    text-align: center;
    padding: 1.5em 0.5rem;
  }
`
