import { paletteColors, borderRadius } from './Root'
import styled from '@emotion/styled'

export const Button = styled('a')`
  font-size: 14px;
  display: inline-block;
  letter-spacing: 0.25px;
  background: ${paletteColors.primary};
  color: ${paletteColors.lightColor};
  padding: 1rem 1.5em;
  border-radius: ${borderRadius.globalBtn};
  cursor: pointer;
  transition: all ease-in 100ms;
  &:hover { opacity: 0.85; }
  @media screen and (max-width: 768px){ font-size: 18px; }
`

export const Container = styled('div')`
  width: 100%;
  padding: 1em 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
