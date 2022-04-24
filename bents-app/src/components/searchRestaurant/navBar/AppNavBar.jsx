import { FaMapMarkerAlt } from 'react-icons/fa'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { ReactComponent as AvatarSVG } from '../../../assets/avatar.svg'
import { RiSearchLine } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { searchInput } from '../../../utils/searchInput'
import * as NavbarStyle from './AppNavBar.style'

export default function AppNavbar({ searchPlace, setSearchPlace }) {
  const address = searchInput('')

  const handleChange = suggestion => {
    setSearchPlace({
      ...searchPlace,
      longitude: suggestion[0],
      latitude: suggestion[1]
    })
  }

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
            {address.suggestions?.length > 0 && (
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
            )}
          </NavbarStyle.ContainerInput>
          <NavbarStyle.ContainerMoreOptions>
            <AiOutlineMenu />
            <AvatarSVG />
          </NavbarStyle.ContainerMoreOptions>
        </NavbarStyle.ContainerNav>
      </NavbarStyle.Nav>
    </>
  )
}
