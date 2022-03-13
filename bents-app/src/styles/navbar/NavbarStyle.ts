import { paletteColors, borderRadius } from '../Root'
import { IoMenu, IoMdClose } from 'react-icons/all'
import styled from '@emotion/styled'

export const Burger = styled(IoMenu)`
    cursor: pointer;
    display: none;
    color: ${paletteColors.primary};
    @media screen and (max-width: 768px){ display: block; }
`

export const Close = styled(IoMdClose)`
    cursor: pointer;
    display: none;
    color: ${paletteColors.lightColor};
    @media screen and (max-width: 768px){ display: block; }
`

export const DropdownMenu = styled('div')` 
    transition: all ease-in-out 600ms;
    position: fixed;
    height: 100vh;
    background: ${paletteColors.black};
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
                color:${paletteColors.lightColor};
            }
        }
    } 

`

export const Nav = styled.nav`
    padding: 1em 50px;
    width: 100%;
    font-size: 14px;
`
export const ContainerNav = styled('div')`
    display: flex;    
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled('div')`
    cursor: pointer;
    svg{
        height: 5em;
        width: 10em;
    }
    @media screen and (max-width: 768px){ display: none; }
`

export const NavItems = styled('div')`
    ul{
        display: flex;
        gap: 4vw;
        list-style: none;
        li{
            a{
                transition: all ease-in 150ms;
                cursor: pointer;
                color: ${paletteColors.primaryText};
                &:hover{opacity: 0.65;}
            }
        }
    }
    @media screen and (max-width: 768px){ display: none; }    
`

export const ButtonLogin = styled('a')`        
    letter-spacing: 0.25px;
    background: ${paletteColors.primary};
    color: ${paletteColors.lightColor};
    padding: .75rem 1.25em;
    border-radius: ${borderRadius.btn};
    cursor: pointer;
    transition: all ease-in 100ms;
    &:hover{opacity: 0.85;}    
`