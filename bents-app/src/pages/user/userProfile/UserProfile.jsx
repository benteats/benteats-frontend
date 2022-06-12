import * as UserStyle from './UserProfile.style'
import { FilterButton } from '../../../styles/Global'
import AppSimpleNavbar from '../../../components/searchRestaurant/navBar/AppSimpleNavbar'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useEffect, useState } from 'react'
import { api } from '../../../api/axios'
import { UserProfileMap } from './UserProfileMap'
import Modal from '../modal/Modal'

export default function UserProflie() {
  const { userData } = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [valueState, setValueState] = useState(false)
  const [reRender, setReRender] = useState(false)

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

  const handleEditModal = (params) => {
    setValueState({
      state: params.state,
      field: params.field,
      value: params.value
    })
  }

  useEffect(() => {
    if (user == null) {
      getUserDetailById()
    }
  }, [])


  useEffect(() => {
    if (reRender) {
      getUserDetailById()
      setReRender(!reRender)
    }
  }, [reRender])

  return (
    <>
      {user && (
        <UserStyle.Container>
          {valueState.state && <Modal valueState={valueState} setValueState={setValueState} userData={userData} reRender={reRender} setReRender={setReRender}/>}
          <AppSimpleNavbar />
          <UserStyle.ContainerPreferences>
            <UserStyle.Title>Preferências</UserStyle.Title>
            {Object.keys(user).map((element, item) => (
              <UserStyle.FormInput key={item}>
                <div>
                  {UserProfileMap.map(subElement =>
                  <UserStyle.Field>
                    {subElement.field}
                  </UserStyle.Field>
                  )[item]}
                  <UserStyle.Value>{element == 'password' ? '******' : user[element]}</UserStyle.Value>
                </div>
                <FilterButton onClick={() => handleEditModal({state: !valueState.state, field: element, value: user[element]})}>Alterar</FilterButton>
              </UserStyle.FormInput>
            ))}
          </UserStyle.ContainerPreferences>
        </UserStyle.Container>
      )}
    </>
  )
}
