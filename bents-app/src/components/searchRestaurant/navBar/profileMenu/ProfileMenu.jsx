import { useNavigate } from 'react-router-dom'
import * as ProfileMenuStyle from './ProfileMenu.style'
import { URL_AZURE } from '../../../constants/http.azure.request'
import axios from 'axios'

export default function ProfileMenu() {
  let navigate = useNavigate()
  async function logOff() {
    try {
      await axios.delete(
        `${URL_AZURE}/users/logOffUser/${localStorage.idUser}`
      )
      localStorage.setItem("idUser", '')
      navigate('/login')
    } catch (e) {
      console.error('error logOff =>', e)
    }
  }
  return (
    <>
      <ProfileMenuStyle.MenuWrapperMobile>
        <ul>
          <li>
            <a>Configurações</a>
          </li>
          <li>
            <a onClick={logOff}>Sair da Conta</a>
          </li>
        </ul>
      </ProfileMenuStyle.MenuWrapperMobile>
    </>
  )
}
