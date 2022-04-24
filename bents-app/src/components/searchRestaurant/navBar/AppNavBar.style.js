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
  height: 65px;
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
`

export const ContainerInput = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  background-color: ${paletteColors.iptBackground};
  border: none;
  border-radius: ${borderRadius.globalBtn};
  height: 2.5em;
  max-width: 50vh;
  width: 100%;
  svg {
    cursor: pointer;
    padding: 4px;
    width: 25px;
    background-color: ${paletteColors.primary};
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
  background-color: ${paletteColors.white};
  border: 1px solid ${paletteColors.iptBackground};
  border-radius: 27pt;
  height: 2.5em;
  width: 5em;
  padding: 0 5px 0 12px;
  svg {
    width: 20px;
    height: auto;
    &:nth-of-type(1) {
      width: 18px;
    }
  }
`

export const Input = styled('input')`
  font-family: 'Inter', sans-serif;
  font-size: ${fontSize.smText};
  font-weight: 500;
  border: none;
  background-color: ${paletteColors.iptBackground};
  height: 1.9em;
  width: 100%;
  color: ${paletteColors.primaryText};
  padding: 0 10px 0 15px;
  outline: none;
  &::placeholder {
    font-size: ${fontSize.smText};
    font-weight: 500;
    opacity: 0.7;
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
    height: 2.5em;
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
  border: 1px solid ${paletteColors.lightGrayBorder};
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
