import * as ProfileMenuStyle from './ProfileMenu.style'
import { AuthContext } from '../../../../context/AuthContext'
import { useContext } from 'react'

export default function ProfileMenu() {
  const { handleLogout } = useContext(AuthContext)

  return (
    <>
      <ProfileMenuStyle.MenuWrapper>
        <ul>
          <li>
            <a>Configurações</a>
          </li>
          <li>
            <a onClick={handleLogout}>Sair da Conta</a>
          </li>
        </ul>
      </ProfileMenuStyle.MenuWrapper>
    </>
  )
}
