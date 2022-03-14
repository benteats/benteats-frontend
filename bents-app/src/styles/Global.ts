import { paletteColors, borderRadius, fontSize } from './Root'
import styled from '@emotion/styled'

export const Button = styled('a')`
  font-size: ${fontSize.smText};
  display: inline-block;
  letter-spacing: 0.25px;
  background: ${paletteColors.primary};
  color: ${paletteColors.lightColor};
  padding: 1rem 1.5em;
  border-radius: ${borderRadius.globalBtn};
  cursor: pointer;
  transition: all ease-in 100ms;
  &:hover { opacity: 0.85; }
  @media screen and (max-width: 768px){ font-size: ${fontSize.lgText}; }
`

export const Container = styled('div')`
  margin-top: 100px;
  width: 100%;
  padding: 1em 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1080px){ padding: 1em 50px; }
  @media screen and (max-width: 768px){ padding: 1em; }
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