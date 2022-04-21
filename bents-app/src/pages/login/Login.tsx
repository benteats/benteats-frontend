import { ReactComponent as CoupleSVG } from '../../assets/couple.svg'
import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import Header from '../../components/login/header/Header'
import * as FormStyle from '../../styles/form/Form.style'
import * as LoginStyle from './Login.style'
import * as Global from '../../styles/Global'
import { useState } from 'react'

export default function Login() {
  let navigate = useNavigate()
  const [isVisible, setVisisble] = useState(false)
  const togglePassword = () => {
    setVisisble(!isVisible)
  }
  return (
    <>
      <Header />
      <LoginStyle.Container>
        <LoginStyle.ContainerSvg>
          <CoupleSVG />
        </LoginStyle.ContainerSvg>
        <LoginStyle.ContainerText>
          <Global.Title>Bem Vindo</Global.Title>
          <Global.Description>
            Entre com seus dados cadastrados!
          </Global.Description>
          <LoginStyle.Form>
            <LoginStyle.FormContainer>
              <FormStyle.Input
                placeholder="Seu usuário ou email"
                maxLength={35}
              />
            </LoginStyle.FormContainer>
            <LoginStyle.FormContainer>
              <FormStyle.Input
                placeholder="Senha"
                type={isVisible ? 'text' : 'password'}
                maxLength={20}
              />
              {isVisible ? (
                <IoMdEye size={'1.75em'} onClick={togglePassword} />
              ) : (
                <IoMdEyeOff size={'1.75em'} onClick={togglePassword} />
              )}
            </LoginStyle.FormContainer>
            <LoginStyle.Button>Iniciar</LoginStyle.Button>
            <LoginStyle.Span css={css({ textAlign: 'start' })}>
              Não é membro?{' '}
              <LoginStyle.Link
                onClick={() => {
                  navigate('/registro')
                }}
              >
                Registre agora!
              </LoginStyle.Link>
            </LoginStyle.Span>
          </LoginStyle.Form>
        </LoginStyle.ContainerText>
      </LoginStyle.Container>
    </>
  )
}
