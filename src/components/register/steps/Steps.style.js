import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  padding-top: 2em;
  display: grid;
  gap: 1.75em;
`

export const Content = styled('div')``

export const ContainerButton = styled('div')`
  display: flex;
  padding-top: 1.5em;
`

export const Checkbox = styled('div')`
  transition: ease-in 100ms all;
  display: grid;
  grid-template-columns: 75px auto;
  align-items: center;
  gap: 2em;
  padding: 1em 2em;
  cursor: pointer;
  height: 140px;
  background: ${paletteColors.iptBackground};
  border-radius: 35px;
  svg {
    height: 75px;
    width: 75px;
    padding: ${borderRadius.btn};
    font-size: 70px;
    border-radius: ${borderRadius.checkboxIcon};
    background: ${paletteColors.white};
    color: ${paletteColors.primary};
  }
  h2 {
    padding-bottom: 0.25rem;
    font-weight: 600;
    font-size: 1.5em;
  }
  span {
    color: ${paletteColors.secondaryText};
    font-size: ${fontSize.mdText};
  }
  @media screen and (max-width: 768px) {
    height: auto;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: auto;
    place-items: center;
    text-align: center;
    padding: 2em;
  }
`

export const Input = styled('input')`
  display: none;
  &[type='checkbox']:checked ~ div {
    background: ${paletteColors.primary};
    svg {
      background: ${paletteColors.darkBlue};
      color: ${paletteColors.white};
    }
    h2 {
      color: ${paletteColors.white};
    }
    span {
      color: ${paletteColors.iptBackground};
    }
  }
`

export const ContainerForm = styled('div')`
  display: grid;
  grid-template-areas: 'a a';
  gap: 2.5em 4em;
  @media screen and (max-width: 1080px) {
    width: 100%;
    grid-template-areas: 'a';
  }
`

export const ContainerInput = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContainerCreatedAccount = styled('div')`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  svg {
    width: 20em;
    height: auto;
  }
  span {
    max-width: 600px;
    padding: 1em 0;
    line-height: 1.75em;
  }
`
