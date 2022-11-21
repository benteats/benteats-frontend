import { ReactComponent as EatingSVG } from '../../../assets/orange-boy.svg'
import * as FormStyle from '../../../styles/form/Form.style'
import * as RegisterStyle from '../../../pages/register/Register.style'
import * as StepsStyle from './Steps.style'

export default function CreatedRestaurantAccount({ setPage }) {
  return (
    <>
      <StepsStyle.ContainerCreatedAccount>
        <EatingSVG />
        <RegisterStyle.Title>Falta só um pouco!</RegisterStyle.Title>
        <RegisterStyle.Description>
        Tudo certo por aqui, seu usuário já está criado! 
        Só faltam mais alguns detalhes para você contar sobre o seu 
        comércio para os usuários.
        </RegisterStyle.Description>
        <FormStyle.Button
          onClick={() => {
            setPage(5)
          }}
        >
          Continuar
        </FormStyle.Button>
      </StepsStyle.ContainerCreatedAccount>
    </>
  )
}
