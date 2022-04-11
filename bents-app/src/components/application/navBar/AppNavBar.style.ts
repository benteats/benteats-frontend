import { paletteColors, borderRadius } from '../../../styles/Root'
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

export const ContainerInput = styled('div')`
display: flex;
background-color: #EAF0F7;
border: none;
border-radius: 27pt;
height: 2.5em;
width: 22em;
svg {
    width: 9%;
    height: auto;
  }
`

export const ContainerMoreOptions = styled('div')`
display: flex;
justify-content: space-between;
background-color: #FFFFFF;
border: 1px solid #EAF0F7;
border-radius: 27pt;
height: 2.5em;
width: 5em;
padding-left: 5px;
padding-right: 5px;

svg {
    width: 40%;
    height: auto;
  }
`

export const Input = styled('input')`
font-size: 18px;
border: none;
background-color: #EAF0F7;
height: 1.9em;
width: 15em;
color: #0A093D;
border-radius: 27pt;
padding: 0 10px 0 15px;
:focus {
  border: 1px solid #EAF0F7;

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
