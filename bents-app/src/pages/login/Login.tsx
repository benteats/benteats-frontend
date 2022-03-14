import { ReactComponent as CoupleSVG } from '../../assets/couple.svg'
import { FaUserFriends } from 'react-icons/fa'
import { IoRestaurant } from 'react-icons/io5'
import { css } from '@emotion/react'
import { IoIosEye, IoMdEyeOff } from 'react-icons/io'
import Header from '../login/header/Header'
import * as FormStyle from '../../styles/form/FormStyle'
import * as LoginStyle from '../../styles/login/LoginStyle'
import * as Global from '../../styles/Global'

export default function Login() {
  let typeUser = ''
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
              <FormStyle.Input placeholder="Seu usuário ou email" />
            </LoginStyle.FormContainer>
            <LoginStyle.FormContainer>
              <FormStyle.Input placeholder="Senha" type="password" />
              <IoMdEyeOff size={'1.75em'} />
            </LoginStyle.FormContainer>
            <LoginStyle.Span>Recuperar senha</LoginStyle.Span>
            <LoginStyle.Button>Iniciar</LoginStyle.Button>
            <LoginStyle.Span css={css({ textAlign: 'start' })}>
              Não é membro? <LoginStyle.Link>Registre agora!</LoginStyle.Link>
            </LoginStyle.Span>
          </LoginStyle.Form>
        </LoginStyle.ContainerText>
        {/* <LoginStyle.ContainerText>
          <Global.Title>Você está conectando como?</Global.Title>
          <Global.Description>
            {`Você irá os contar uma experiência sua? ou irá ver como anda as
            avaliações sobre seu Restaurante`}
          </Global.Description>
          <LoginStyle.UserOption
          onClick={() => { typeUser='user' }}>
            <FaUserFriends />
            <div>
              <span>Usuário</span>
              <p>
                Compartilhe suas impressôes vividas! ou descubra o que há na
                região.
              </p>
            </div>
          </LoginStyle.UserOption>
          <LoginStyle.UserOption
          onClick={() => { typeUser='restaurant' }}>
            <IoRestaurant />
            <div>
              <span>Restaurante</span>
              <p>
                Vamos descobrir como anda o seu restaurante? ou iremos atualizar
                alguma informação?
              </p>
            </div>
          </LoginStyle.UserOption>
        </LoginStyle.ContainerText> */}
      </LoginStyle.Container>
    </>
  )
}
