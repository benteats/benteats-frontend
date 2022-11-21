import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow
} from '../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  height: calc(100vh - 150px);
  align-items: center;
  padding: 0.5rem 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4em;
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    padding: 1em 50px;
    gap: 2em;
  }
  @media screen and (max-width: 768px) {
    padding: 1em 1.5em;
  }
`

export const ContainerText = styled('div')`
  width: 100%;
  text-align: center;
  display: grid;
  place-items: center;
  @media screen and (max-width: 1080px) {
    h1 {
      display: none;
    }
    p {
      display: none;
    }
  }
`

export const ContainerSvg = styled('div')`
  height: 100%;
  display: flex;
  align-items: self-end;
  background: ${paletteColors.primary};
  padding: 2em 2em 0 2em;
  border-radius: ${borderRadius.homeSvg};
  justify-content: center;
  svg {
    display: block;
    width: auto;
    height: 100%;
  }
  @media screen and (max-width: 1600px) {
    gap: 2em;
    max-width: 700px;
  }
  @media screen and (max-width: 1400px) {
    svg {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    width: 100%;
    height: 30vh;
    svg {
      width: auto;
      height: 30vh;
    }
  }
`
export const Form = styled('form')`
  width: 100%;
  text-align: center;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  @media screen and (max-width: 1080px) {
    max-width: 100%;
  }
`

export const FormContainer = styled('div')`
  display: flex;
  align-items: center;
  &:nth-of-type(1) {
    flex-direction: column;
  }
  input {
    width: 100%;
  }
  svg {
    margin-left: -3em;
    color: ${paletteColors.secondaryText};
  }
`

export const Button = styled('button')`
  border: none;
  outline: none;
  font-size: ${fontSize.lgText};
  display: inline-block;
  letter-spacing: 0.25px;
  background: ${paletteColors.primary};
  color: ${paletteColors.lightColor};
  padding: 2em 1.5em;
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
