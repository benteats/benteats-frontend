import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'
import { IoMenu, IoClose } from 'react-icons/io5'
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
  z-index: 5;
  top: 0;
  position: fixed;
  height: 75px;
  padding: 0 50px;
  width: 100%;
  font-size: ${fontSize.smText};
  @media screen and (max-width: 768px) {
    padding: 1em 1.5em;
  }
`
export const ContainerNav = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerInput = styled('div')`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 .5rem;
background-color: #EAF0F7;
border: none;
border-radius: 27pt;
height: 2.5em;
width: 22em;
svg {
  cursor: pointer;
  padding: 3px;
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
justify-content: space-between;
background-color: #FFFFFF;
border: 1px solid #EAF0F7;
border-radius: 27pt;
height: 2.5em;
width: 5em;
padding-left: 6px;
padding-right: 6px;

svg {
    width: 40%;
    height: auto;
  }
`

export const Input = styled('input')`
font-family: 'Inter', sans-serif;
font-size: ${fontSize.smText};
font-weight: 500;
border: none;
background-color: #EAF0F7;
height: 1.9em;
width: 100%;
color: #0A093D;
border-radius: 27pt;
padding: 0 10px 0 15px;
outline: none;
`

export const Icon = styled('img')`
height: 1px;
width: 1px;

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
