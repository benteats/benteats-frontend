import { paletteColors, borderRadius } from '../../../styles/Root'
import { IoMenu, IoClose } from 'react-icons/io5'
import styled from '@emotion/styled'

export const Burger = styled(IoMenu)`
  cursor: pointer;
  display: none;
  color: ${paletteColors.primary};
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const Close = styled(IoClose)`
  cursor: pointer;
  display: none;
  color: ${paletteColors.lightColor};
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const DropdownMenu = styled('div')`
  background: ${paletteColors.black};
  top: 0;
  z-index: 10;
  transition: all ease-in-out 600ms;
  position: fixed;
  height: 100vh;
  width: 100%;
  padding: 1em 2em;
  ul {
    padding: 5em 0;
    height: 100%;
    width: 100%;
    display: grid;
    list-style: none;
    text-align: center;
    li {
      padding: 1em;
      a {
        cursor: pointer;
        font-size: 1.5em;
        color: ${paletteColors.lightColor};
        text-decoration: none;
      }
    }
  }
`

export const Nav = styled.nav`
  background: ${paletteColors.white};
  z-index: 5;
  top: 0;
  position: fixed;
  height: 100px;
  padding: 1em 50px;
  width: 100%;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    padding: 1em 1.5em;
  }
`
export const ContainerNav = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled('a')`
  cursor: pointer;
  svg {
    color: ${paletteColors.primary};
    height: 5em;
    width: 10em;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItems = styled('div')`
  ul {
    display: flex;
    gap: 4vw;
    list-style: none;
    li {
      a {
        font-size: 16px;
        transition: all ease-in 150ms;
        cursor: pointer;
        color: ${paletteColors.primaryText};
        text-decoration: none;
        &:hover {
          opacity: 0.65;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ButtonLogin = styled('a')`
  display: inline-block;
  letter-spacing: 0.25px;
  background: ${paletteColors.primary};
  color: ${paletteColors.lightColor};
  padding: 0.75rem 1.25em;
  border-radius: ${borderRadius.btn};
  cursor: pointer;
  transition: all ease-in 100ms;
  &:hover {
    opacity: 0.85;
    text-decoration: none;
  }
`
