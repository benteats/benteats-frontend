import { ReactComponent as CoupleSVG } from '../../assets/couple.svg'
import { FaUserFriends } from 'react-icons/fa'
import { IoRestaurant } from 'react-icons/io5'
import { css } from '@emotion/react'
import { IoIosEye, IoMdEyeOff } from 'react-icons/io'
import Header from '../../components/login/header/Header'
import * as FormStyle from '../../styles/form/FormStyle'
import * as LoginStyle from './LoginStyle'
import * as Global from '../../styles/Global'

export default function Login() {
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
                type="password"
                maxLength={20}
              />
              <IoMdEyeOff size={'1.75em'} />
            </LoginStyle.FormContainer>
            <LoginStyle.Span>Recuperar senha</LoginStyle.Span>
            <LoginStyle.Button>Iniciar</LoginStyle.Button>
            <LoginStyle.Span css={css({ textAlign: 'start' })}>
              Não é membro? <LoginStyle.Link>Registre agora!</LoginStyle.Link>
            </LoginStyle.Span>
          </LoginStyle.Form>
        </LoginStyle.ContainerText>
      </LoginStyle.Container>
    </>
  )
}
