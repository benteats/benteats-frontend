import { ReactComponent as EatingSVG } from '../../../assets/eating.svg'
import * as FormStyle from '../../../styles/form/Form.style'
import * as RegisterStyle from '../../../pages/register/Register.style'
import * as StepsStyle from './Steps.style'
import { useNavigate } from 'react-router-dom'

export default function CreatedAccount() {
  let navigate = useNavigate()
  return (
    <>
      <StepsStyle.ContainerCreatedAccount>
        <EatingSVG />
        <RegisterStyle.Title>Conta criada com sucesso!</RegisterStyle.Title>
        <RegisterStyle.Description>
        Seja bem vindo à BentEats! Tudo certo para que os usuários 
        conhecam seu comércio e seus produtos usando a nosssa plataforma.
        </RegisterStyle.Description>
        <FormStyle.Button
          onClick={() => {
            navigate('/login')
          }}
        >
          Acessar
        </FormStyle.Button>
      </StepsStyle.ContainerCreatedAccount>
    </>
  )
}
