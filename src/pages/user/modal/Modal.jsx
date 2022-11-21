import * as ModalStyle from './Modal.style'
import * as UserStyle from '../userProfile/UserProfile.style'
import { UserProfileMap } from '../userProfile/UserProfileMap'
import { useEffect } from 'react'
import { api } from '../../../api/axios'
import { useState } from 'react'
import { MdOutlineError } from 'react-icons/md'

export default function Modal({ valueState, setValueState, userData, reRender, setReRender }) {
  const [response, setResponse] = useState(null)
  const [password, setPassword] = useState(null)
  const handleCloseModal = () => {
    setValueState({
      ...valueState,
      state: false
    })
  }

  const handleChange = e => {
    const { value } = e.target
    return setValueState({ ...valueState, value: value })
  }

  const handleChangePassword = e => {
    const { name, value } = e.target
    return setPassword({
      ...password,
      [name]: value
    })
  }

  useEffect(() => {

  }, [])

  async function updatePasswordById() {
    try {
      await api.patch(
        `/users/updatePasswordById/${userData.idUser}`, {...password}
      )
      setResponse(null)
      setValueState({...valueState, state: false})
    } catch (e) {
      setResponse(
        <>
        <MdOutlineError />
        Senhas não conferem!
        </>
      )
      console.error('error updatePasswordById =>', e)
    }
  }

  async function updateUserById() {
    try {
      await api.patch(
        `/users/updateUserById/${userData.idUser}/${valueState.field}/${valueState.value}`
      )
      setResponse(null)
      setReRender(true)
      setValueState({...valueState, state: false})
    } catch (e) {
      setResponse(
        <>
        <MdOutlineError />
        Senhas não conferem!
        </>
      )
      console.error('error updateUserById =>', e)
    }
  }

   const handleSubmit = (type) => {
      if(type === 'password'){
        updatePasswordById()
        return;
      }
      updateUserById()
   }

  return (
    <>
      <ModalStyle.Overlay>
        <ModalStyle.Modal>
          {UserProfileMap.filter(index => index.id == valueState.field).map((element, item) => (
            <ModalStyle.ModalContainer key={item}>
              <ModalStyle.Title>
                <UserStyle.Field>Editar {element.field}</UserStyle.Field>
                <UserStyle.Value>Editar {element.description}</UserStyle.Value>
              </ModalStyle.Title>
              {valueState.field == 'password' ?
                <>
                  <ModalStyle.InputContainer>
                    <label>{element.field} Atual</label>
                    <input type='text' name='currentPassword' onChange={handleChangePassword} />
                  </ModalStyle.InputContainer>
                  <ModalStyle.InputContainer>
                    <label>Nova {element.field}</label>
                    <input type='text' name='newPassword' onChange={handleChangePassword} />
                  </ModalStyle.InputContainer>
                </>
                :
                <ModalStyle.InputContainer>
                  <label>{element.field}</label>
                  <input type='text' name={valueState.field} value={valueState.field == 'password' ? '' : valueState.value} onChange={handleChange} />
                </ModalStyle.InputContainer>
              }
              <ModalStyle.ButtonContainer>
              <ModalStyle.CancelBtn onClick={handleCloseModal}>Cancelar</ModalStyle.CancelBtn>
              <ModalStyle.SaveBtn onClick={() => handleSubmit(element.id)}>Salvar Alterações</ModalStyle.SaveBtn>
               {response && (
                <ModalStyle.ErrorMessage>
                  {response}
                </ModalStyle.ErrorMessage>)}
              </ModalStyle.ButtonContainer>
            </ModalStyle.ModalContainer>
          ))}
        </ModalStyle.Modal>
      </ModalStyle.Overlay>
    </>
  )
}
