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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
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
