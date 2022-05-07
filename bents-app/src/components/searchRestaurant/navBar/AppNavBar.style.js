import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow
} from '../../../styles/Root'
import { IoClose } from 'react-icons/io5'
import styled from '@emotion/styled'

export const Close = styled(IoClose)`
  cursor: pointer;
  display: none;
  color: ${paletteColors.lightColor};
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const Nav = styled.nav`
  background: ${paletteColors.white};
  position: fixed;
  font-size: ${fontSize.smText};
  z-index: 5;
  top: 0;
  height: 70px;
  padding: 0 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 1em 1.5em;
  }
`
export const ContainerNav = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1800px;
  width: 100%;
  gap: 1em;
`

export const ContainerInput = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  background: ${paletteColors.white};
  border-radius: ${borderRadius.checkboxIcon};
  height: 45px;
  max-width: 50vh;
  width: 100%;
  border: 1px solid ${paletteColors.defaultBorder};
  box-shadow: rgb(0 0 0 / 9%) 0px 1px 2px, rgb(0 0 0 / 6%) 0px 0px 2px;
  svg {
    cursor: pointer;
    padding: 6px;
    width: 2.25em;
    background: ${paletteColors.primary};
    color: ${paletteColors.white};
    border-radius: ${borderRadius.btn};
    height: auto;
  }
`

export const ContainerMoreOptions = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${paletteColors.white};
  border: 1px solid ${paletteColors.defaultBorder};
  border-radius: 27pt;
  height: 45px;
  width: 80px;
  padding: 0 5px 0 12px;
  svg {
    width: 2.25em;
    height: auto;
    &:nth-of-type(1) {
      width: 1.35em;
    }
  }
`

export const Input = styled('input')`
  font-family: 'Inter', sans-serif;
  font-size: ${fontSize.smText};
  font-weight: 100;
  border: none;
  background: ${paletteColors.white};
  height: 35px;
  width: 100%;
  color: ${paletteColors.primaryText};
  padding: 0 10px 0 15px;
  outline: none;
  &::placeholder {
    color: ${paletteColors.secondaryText};
    font-family: 'Poppins', sans-serif;
    font-weight: 400 !important;
    font-size: 13px;
    letter-spacing: 0.35px;
    font-weight: 500;
  }
`

export const Icon = styled('img')`
  height: 1px;
  width: 1px;
`

export const Logo = styled('a')`
  cursor: pointer;
  svg {
    color: ${paletteColors.primary};
    height: 45px;
    width: 10em;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SuggestionWrapper = styled('div')`
  background: ${paletteColors.white};
  position: absolute;
  max-width: 35vh;
  width: 100%;
  padding: 1.25em;
  border-radius: ${borderRadius.btn};
  top: 70px;
  display: flex;
  flex-direction: column;
  gap: 1.5em 0;
  border: 1px solid ${paletteColors.defaultBorder};
`

export const SuggestionContainer = styled('div')`
  display: grid;
  grid-template-columns: 3em auto;
  gap: 1em;
  align-items: center;
  svg {
    background: ${paletteColors.darkBlue};
    width: 3em;
    height: 3em;
    padding: 10px;
  }
`

export const Suggestion = styled('span')`
  font-size: ${fontSize.smSubText};
  transition: all ease-in 100ms;
  cursor: pointer;
  max-width: 400px;
  &:hover {
    opacity: 0.5;
  }
`
