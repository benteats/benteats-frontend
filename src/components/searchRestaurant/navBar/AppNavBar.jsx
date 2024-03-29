import { useState, useEffect } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { ReactComponent as AvatarSVG } from '../../../assets/avatar.svg'
import { RiSearchLine } from 'react-icons/ri'
import { GrMenu } from 'react-icons/gr'
import { searchInput } from '../../../utils/searchInput'
import * as NavbarStyle from './AppNavBar.style'
import ProfileMenu from './profileMenu/ProfileMenu'
import { api } from '../../../api/axios'

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

export default function AppNavbar({
  searchPlace,
  setSearchPlace,
  setRestaurantsResult
}) {
  const widthSizeScreen = reizeWindowSize()
  const address = searchInput('')
  const [isOpen, setOpen] = useState(false)
  const toggleProfileMenu = () => {
    setOpen(!isOpen)
  }

  const handleChange = suggestion => {
    setSearchPlace({
      ...searchPlace,
      longitude: suggestion[0],
      latitude: suggestion[1]
    })
  }

  async function getRestaurantByCoordinates(searchPlace) {
    try {
      const response = await api.get(
        `/restaurants/getRestaurantByCoordinates/${searchPlace.latitude}/${searchPlace.longitude}`
      )
      setRestaurantsResult(response.data)
    } catch (e) {
      console.error('error getRestaurantByCoordinates =>', e)
    }
  }

  useEffect(() => {
    if (Object.values(searchPlace).every(o => o !== '')) {
      getRestaurantByCoordinates(searchPlace)
    }
  }, [searchPlace])

  return (
    <>
      <NavbarStyle.Nav>
        <NavbarStyle.ContainerNav>
          <NavbarStyle.Logo>
            <Logo />
          </NavbarStyle.Logo>
          <NavbarStyle.ContainerInput>
            <NavbarStyle.Input placeholder="Qual o seu destino?" {...address} />
            <RiSearchLine />
            {
              address.suggestions?.length > 0 ? (
                <NavbarStyle.SuggestionWrapper>
                  {address.suggestions.map((suggestion, index) => {
                    return (
                      <NavbarStyle.SuggestionContainer key={index}>
                        <FaMapMarkerAlt />
                        <NavbarStyle.Suggestion
                          onClick={() => {
                            address.setValue(suggestion.place_name)
                            address.setSuggestions([])
                            handleChange(suggestion.center)
                          }}
                        >
                          {suggestion.place_name}
                        </NavbarStyle.Suggestion>
                      </NavbarStyle.SuggestionContainer>
                    )
                  })}
                </NavbarStyle.SuggestionWrapper>
              ) : (
                ''
              )
              // (
              //   <NavbarStyle.SuggestionWrapper>
              //     <NavbarStyle.SuggestionContainer>
              //       <FaMapMarkerAlt />
              //       <NavbarStyle.Suggestion>
              //         Casa
              //       </NavbarStyle.Suggestion>
              //     </NavbarStyle.SuggestionContainer>
              //   </NavbarStyle.SuggestionWrapper>
              // )
            }
          </NavbarStyle.ContainerInput>
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
