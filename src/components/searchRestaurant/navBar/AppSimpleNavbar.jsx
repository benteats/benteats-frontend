import { useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { ReactComponent as AvatarSVG } from '../../../assets/avatar.svg'
import { GrMenu } from 'react-icons/gr'
import * as NavbarStyle from './AppNavBar.style'
import ProfileMenu from './profileMenu/ProfileMenu'
import { useNavigate } from 'react-router-dom'

function reizeWindowSize() {
  const [windowWidthSize, setWindowWidthSize] = useState(undefined)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowWidthSize(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowWidthSize
}

export default function AppSimpleNavbar() {
    const widthSizeScreen = reizeWindowSize()
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()
    const toggleProfileMenu = () => {
      setOpen(!isOpen)
    }

    return (
      <>
        <NavbarStyle.Nav>
          <NavbarStyle.ContainerNav>
            <NavbarStyle.Logo onClick={() => {navigate(-1)}}>
              <Logo />
            </NavbarStyle.Logo>
            <NavbarStyle.ContainerMoreOptions onClick={toggleProfileMenu}>
              <GrMenu />
              <AvatarSVG />
              {isOpen && widthSizeScreen >= 768 ? <ProfileMenu /> : ''}
            </NavbarStyle.ContainerMoreOptions>
          </NavbarStyle.ContainerNav>
        </NavbarStyle.Nav>
        {isOpen && widthSizeScreen <= 768 ? <ProfileMenu /> : ''}
      </>
    )
}
