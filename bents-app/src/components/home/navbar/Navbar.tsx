import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { useState } from 'react'
import { css } from '@emotion/react'
import * as NavbarStyle from '../../../styles/navbar/NavbarStyle'
import * as Global from '../../../styles/Global'

export default function Navbar() {
  let navigate = useNavigate()
  const [isMobile, setMobile] = useState(false)
  const toggleMobileMenu = () => {
    setMobile(!isMobile)
  }
  return (
    <>
      <NavbarStyle.DropdownMenu css={css({ left: isMobile ? '0%' : '-150%' })}>
        <NavbarStyle.Close size={'3em'} onClick={toggleMobileMenu} />
        <ul>
          <li>
            <a>Solução</a>
          </li>
          <li>
            <a>Como Funciona</a>
          </li>
          <li>
            <a>Vantagens</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </NavbarStyle.DropdownMenu>
      <NavbarStyle.Nav>
        <NavbarStyle.ContainerNav>
          <NavbarStyle.Burger size={'2.5em'} onClick={toggleMobileMenu} />
          <NavbarStyle.Logo>
            <Logo/>
          </NavbarStyle.Logo>
          <NavbarStyle.NavItems>
            <ul>
              <li>
                <a>Solução</a>
              </li>
              <li>
                <a>Como Funciona</a>
              </li>
              <li>
                <a>Vantagens</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </NavbarStyle.NavItems>
          <Global.Button onClick={() => {navigate('/login')}}>Entrar</Global.Button>
        </NavbarStyle.ContainerNav>
      </NavbarStyle.Nav>
    </>
  )
}
