import { ReactComponent as EatingSVG } from '../../../assets/solution.svg'
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
        <RegisterStyle.Title>Restaurante criado com sucesso!</RegisterStyle.Title>
        <RegisterStyle.Description>
        Parabéns pela criação da conta! Agora já está tudo certo para 
        você navegar e conhecer as melhores opções gastrônomicas por perto de você.
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
