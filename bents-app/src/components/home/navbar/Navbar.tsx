import { useState } from 'react'
import * as NavbarStyle from '../../../styles/navbar/NavbarStyle'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { css } from '@emotion/react'

export default function Navbar(){   
  const [isMobile,setMobile] = useState(false)
  const toggleMobileMenu = () => { setMobile(!isMobile) }
  return (
    <>      
      <NavbarStyle.DropdownMenu
      css={css({ left: isMobile? '0%' : '-150%' })}
      >
        <NavbarStyle.Close
        size={'2.5em'}
        onClick={toggleMobileMenu}
        />
        <ul>
          <li><a>Solução</a></li>
          <li><a>Como Funciona</a></li>
          <li><a>Vantagens</a></li>
          <li><a>FAQ</a></li>
        </ul> 
      </NavbarStyle.DropdownMenu>      
      <NavbarStyle.Nav>        
        <NavbarStyle.ContainerNav>
          <NavbarStyle.Burger
          size={'2.5em'}
          onClick={toggleMobileMenu}
          />
          <NavbarStyle.Logo>
            <Logo/>
          </NavbarStyle.Logo>
          <NavbarStyle.NavItems>
            <ul>
              <li><a>Solução</a></li>
              <li><a>Como Funciona</a></li>
              <li><a>Vantagens</a></li>
              <li><a>FAQ</a></li>
            </ul>            
          </NavbarStyle.NavItems>
          <NavbarStyle.ButtonLogin>Entrar</NavbarStyle.ButtonLogin>
        </NavbarStyle.ContainerNav>
      </NavbarStyle.Nav>
    </>
  )
}