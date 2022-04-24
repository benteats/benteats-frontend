import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { css } from '@emotion/react'
import { navbarMap } from './NavbarMap'
import * as NavbarStyle from './Navbar.style'
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
          {navbarMap.map((element, item) => (
            <li key={item}>
              <a onClick={toggleMobileMenu} href={element.section}>
                {element.name}
              </a>
            </li>
          ))}
        </ul>
      </NavbarStyle.DropdownMenu>
      <NavbarStyle.Nav>
        <NavbarStyle.ContainerNav>
          <NavbarStyle.Burger size={'2.5em'} onClick={toggleMobileMenu} />
          <NavbarStyle.Logo href="#section-hero">
            <Logo />
          </NavbarStyle.Logo>
          <NavbarStyle.NavItems>
            <ul>
              {navbarMap.map((element, item) => (
                <li key={item}>
                  <a href={element.section}>{element.name}</a>
                </li>
              ))}
            </ul>
          </NavbarStyle.NavItems>
          <Global.Button
            onClick={() => {
              navigate('/login')
            }}
          >
            Entrar
          </Global.Button>
        </NavbarStyle.ContainerNav>
      </NavbarStyle.Nav>
    </>
  )
}
