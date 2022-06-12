import * as ProfileMenuStyle from './ProfileMenu.style'
import { AuthContext } from '../../../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfileMenu() {
  const { handleLogout } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <>
      <ProfileMenuStyle.MenuWrapper>
        <ul>
          <li>
            <a onClick={() => {navigate('/preferencias')}}>Preferências</a>
          </li>
          <li>
            <a onClick={handleLogout}>Sair da Conta</a>
          </li>
        </ul>
      </ProfileMenuStyle.MenuWrapper>
    </>
  )
}
