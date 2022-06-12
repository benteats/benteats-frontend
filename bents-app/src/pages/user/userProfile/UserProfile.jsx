import * as UserStyle from './UserProfile.style'
import { FilterButton } from '../../../styles/Global'
import AppSimpleNavbar from '../../../components/searchRestaurant/navBar/AppSimpleNavbar'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useEffect, useState } from 'react'
import { api } from '../../../api/axios'
import { UserProfileMap } from './UserProfileMap'


export default function UserProflie() {
  const { userData } = useContext(AuthContext)
  const [user, setUser] = useState(null)

  async function getUserDetailById() {
    try {
      const response = await api.get(
        `/users/getUserDetailById/${userData.idUser}`
      )
      setUser(response.data)
    } catch (e) {
      console.error('error getUserDetailById =>', e)
    }
  }

  useEffect(() => {
    if (user == null) {
      getUserDetailById()
    }
    console.log('UserProfileMap',UserProfileMap)
  }, [])

  //   email: "elias@gmail.com"
  // name: "Elias Nachle"
  // password: "$2a$10$2pg3qUPZITSvTvR2dE5pzOr9ixm.ayCTLnTiTEzuEb8N18wA0UFPy"
  // phone: "(11) 97114-5076"

  return (
    <>
      {user && (
        <UserStyle.Container>
          <AppSimpleNavbar />
          <UserStyle.ContainerPreferences>
            <UserStyle.Title>Preferências</UserStyle.Title>
            {/* <UserStyle.ProfilePhoto>
          <UserStyle.Field>Foto de Perfil</UserStyle.Field>
          <UserStyle.Value>Foto exibida no seu perifl e pública para todos os
          usuários da plataforma.</UserStyle.Value>
          <FilterButton>Alterar</FilterButton>
        </UserStyle.ProfilePhoto> */}
            {Object.keys(user).map((element, item) => (
              <UserStyle.FormInput key={item}>
                <div>
                  {UserProfileMap.map(subElement => (
                    <UserStyle.Field>
                      {subElement.field}
                    </UserStyle.Field>
                  ))[item]}
                  <UserStyle.Value>{element == 'password' ? '******' : user[element]}</UserStyle.Value>
                </div>
                <FilterButton>Alterar</FilterButton>
              </UserStyle.FormInput>
            ))}
            <UserStyle.SaveBtn>Salvar Alterações</UserStyle.SaveBtn>
          </UserStyle.ContainerPreferences>
        </UserStyle.Container>
      )}
    </>
  )
}
