import { ReactComponent as CoupleSVG } from '../../assets/couple.svg'
import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import Header from '../../components/login/header/Header'
import * as FormStyle from '../../styles/form/Form.style'
import * as LoginStyle from './Login.style'
import * as Global from '../../styles/Global'
import { useState, useContext } from 'react'
import { Context } from '../../context/AuthContext'

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);
  let navigate = useNavigate()
  const [errorPostUser, setErrorPostUser] = useState(null)
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  const [isVisible, setVisisble] = useState(false)
  const togglePassword = () => {
    setVisisble(!isVisible)
  }

  const handleChange = e => {
    const { name, value } = e.target
    return setFormLogin({ ...formLogin, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(formLogin, {
      setErrorPostUser
    })
  }

  return (
    <>
      <Header />
      <LoginStyle.Container>
        <LoginStyle.ContainerSvg>
          <CoupleSVG />
        </LoginStyle.ContainerSvg>
        <LoginStyle.ContainerText>
          <Global.Title>Bem-Vindo</Global.Title>
          <Global.Description>
            Entre com seus dados cadastrados!
          </Global.Description>
          <LoginStyle.Form>
            <LoginStyle.FormContainer>
              <FormStyle.ErrorMessageLogin>
                {errorPostUser}
              </FormStyle.ErrorMessageLogin>
              <FormStyle.Input
                placeholder="Seu telefone ou email"
                maxLength={50}
                name="email"
                type="text"
                value={formLogin.email}
                onChange={handleChange}
              />
            </LoginStyle.FormContainer>
            <LoginStyle.FormContainer>
              <FormStyle.Input
                placeholder="Senha"
                type={isVisible ? 'text' : 'password'}
                maxLength={35}
                name="password"
                value={formLogin.password}
                onChange={handleChange}
              />
              {isVisible ? (
                <IoMdEye size={'1.75em'} onClick={togglePassword} />
              ) : (
                <IoMdEyeOff size={'1.75em'} onClick={togglePassword} />
              )}
            </LoginStyle.FormContainer>
            <LoginStyle.Button type='button' onClick={handleSubmit}>Iniciar</LoginStyle.Button>
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
