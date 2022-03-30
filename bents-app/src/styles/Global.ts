import { paletteColors, borderRadius, fontSize, shadow } from './Root'
import styled from '@emotion/styled'

export const Button = styled('a')`
  font-size: ${fontSize.smText};
  display: inline-block;
  letter-spacing: 0.25px;
  background: ${paletteColors.primary};
  color: ${paletteColors.lightColor};
  padding: 1.5em 2em;
  border-radius: ${borderRadius.globalBtn};
  cursor: pointer;
  transition: all ease-in 100ms;
  ${shadow.btnShadow}
  &:hover {
    opacity: 0.85;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    font-size: ${fontSize.lgText};
  }
`

export const BlueContainer = styled('div')`
  background-color: #2160e8;
  margin-top: 100px;
  width: 100%;
  padding: 1em 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1080px) {
    padding: 1em 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`

export const Container = styled('section')`
  width: 100%;
  padding: 4em 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1080px) {
    padding: 4em 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 3em;
  }
`

export const Title = styled('h1')`
  color: ${paletteColors.primaryText};
  font-family: 'Inter', sans-serif;
  font-size: ${fontSize.dfTitle};
  font-weight: 700;
  line-height: 1em;
`

export const Description = styled('p')`
  padding: 1.75em 0;
  font-size: ${fontSize.mdText};
  line-height: 1.85em;
  letter-spacing: 0.25px;
  color: ${paletteColors.secondaryText};
  white-space: pre-line;
`
