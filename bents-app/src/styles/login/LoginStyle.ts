import { paletteColors, borderRadius, fontSize } from '../Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  align-items: center;
  padding: 1em 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`

export const ContainerText = styled('div')`

`

export const ContainerSvg = styled('div')`
  height: 100%;
  display: flex;
  align-items: self-end;
  background: ${paletteColors.primary};
  padding: 2em 2em 0 2em;
  border-radius: ${borderRadius.homeSvg};
  svg{
    display: block;
    width: 100%;
    height: auto;
  }
`
export const Form = styled('form')`
  text-align: center;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const FormContainer = styled('div')`
  display: flex;
  align-items: center;
  input{ width: 100% }
  svg{
    margin-left: -3em;
    color: ${paletteColors.secondaryText};
  }
`

export const Button = styled('a')`
  font-size: ${fontSize.lgText};
  display: inline-block;
  letter-spacing: 0.25px;
  background: ${paletteColors.primary};
  color: ${paletteColors.lightColor};
  padding: 2em 1.5em;
  border-radius: ${borderRadius.globalBtn};
  cursor: pointer;
  transition: all ease-in 100ms;
  &:hover { opacity: 0.85; }
  @media screen and (max-width: 768px){ font-size: ${fontSize.lgText}; }
`

export const Span = styled('span')`
  cursor: pointer;
  font-size: ${fontSize.mdText};
  color: ${paletteColors.secondaryText};
  text-align: end;
`

export const Link = styled('span')`
  cursor: pointer;
  font-size: ${fontSize.mdText};
  font-weight: 700;
  color: ${paletteColors.primary};
  text-align: end;
`

export const UserOption = styled('div')`
  margin-bottom: 2em;
  transition: all ease-in 150ms;
  cursor: pointer;
  max-width: 650px;
  border-radius: ${borderRadius.selectInput};
  padding: 2.25em 2.5em;
  background: ${paletteColors.lightBackground};
  &:hover{ opacity: 0.75; }
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 2em;
  svg{
    padding: 1em;
    height: 4.25em;
    width: 4.25em;
    background: ${paletteColors.white};
    color: ${paletteColors.primary};
    border-radius: ${borderRadius.globalBtn};
  }
  div{
    span{
      font-family: 'Inter', sans-serif;
      font-size: 22px;    
      font-weight: 600;
      color: ${paletteColors.primaryText};
    }
    p{
      padding-top: .5rem;
      color: ${paletteColors.secondaryText};
      font-size: ${fontSize.smText};
      letter-spacing: 0.5px;
    }
  }
`