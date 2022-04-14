import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { ReactComponent as AvatarSVG } from '../../../assets/avatar.svg'
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as NavbarStyle from './AppNavBar.style'

export default function AppNavbar() {
  let navigate = useNavigate()
  const [isMobile, setMobile] = useState(false)
  const toggleMobileMenu = () => {
    setMobile(!isMobile)
  }
  return (
    <>
      <NavbarStyle.Nav>
        <NavbarStyle.ContainerNav>
          <NavbarStyle.Logo href="/">
            <Logo />
          </NavbarStyle.Logo>
          <NavbarStyle.ContainerInput>
            <NavbarStyle.Input/>
            <AvatarSVG/>
          </NavbarStyle.ContainerInput>
          <NavbarStyle.ContainerMoreOptions>
            <AiOutlineMenu/>
            <RiSearchLine/>
          </NavbarStyle.ContainerMoreOptions>
        </NavbarStyle.ContainerNav>
      </NavbarStyle.Nav>
    </>
  )
}
