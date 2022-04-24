import { paletteColors, borderRadius, fontSize, shadow } from '../Root'
import styled from '@emotion/styled'

export const Input = styled('input')`
  height: 80px;
  cursor: pointer;
  outline: none;
  border-radius: ${borderRadius.globalBtn};
  font-size: ${fontSize.smText};
  padding: 1.8em 2.5em;
  background: ${paletteColors.iptBackground};
  border: none;
  &::placeholder {
    color: ${paletteColors.secondaryText};
  }
`

export const Label = styled('label')`
  font-size: ${fontSize.smText};
  font-weight: 700;
  color: ${paletteColors.primaryText};
`

export const PrevButton = styled('button')`
  background: none;
  width: 200px;
  border: none;
  font-size: ${fontSize.smText};
  font-weight: 700;
  letter-spacing: 0.25px;
  color: ${paletteColors.primary};
  cursor: pointer;
  transition: all ease-in 100ms;
  &:hover {
    opacity: 0.85;
    text-decoration: none;
  }
  @media screen and (max-width: 1080px) {
    padding: 2em;
    width: auto;
  }
`

export const Button = styled('button')`
  width: 200px;
  border: none;
  font-size: ${fontSize.smText};
  letter-spacing: 0.25px;
  background: ${paletteColors.primary};
  color: ${paletteColors.lightColor};
  padding: 2em 2em;
  border-radius: ${borderRadius.globalBtn};
  cursor: pointer;
  transition: all ease-in 300ms;
  ${shadow.btnShadow}
  &:hover {
    opacity: 0.85;
    text-decoration: none;
  }
  @media screen and (max-width: 1080px) {
    width: auto;
  }
`

export const ErrorMessageLogin = styled('span')`
  display: flex;
  font-size: ${fontSize.smText};
  font-weight: 700;
  color: ${paletteColors.spanError};
  padding-bottom: 1.5em;
  gap: 0.25rem;
  svg {
    margin: 0;
    color: ${paletteColors.spanError};
    font-size: ${fontSize.smSubTitle};
  }
  @media screen and (max-width: 500px) {
    max-width: 20em;
    flex-direction: column;
    align-items: center;
    svg {
      font-size: ${fontSize.mdSubTitle};
    }
  }
`

export const ErrorMessage = styled('span')`
  font-size: ${fontSize.smText};
  color: ${paletteColors.spanError};
`
