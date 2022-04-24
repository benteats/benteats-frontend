import { ReactComponent as CoupleSVG } from '../../assets/couple.svg'
import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { MdOutlineError } from 'react-icons/md'
import Header from '../../components/login/header/Header'
import * as FormStyle from '../../styles/form/Form.style'
import * as LoginStyle from './Login.style'
import * as Global from '../../styles/Global'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Login() {
  let navigate = useNavigate()
  const [errorPostUser, setErrorPostUser] = useState(null)
  const [formLogin, setFormLogin] = useState({
    login: '',
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

  async function postLogin() {
    try {
      const response = await axios.post(
        'http://localhost:8080/users/loginUser',
        formLogin
      )
      localStorage.setItem("idUser", response.data)
      navigate('/searchRestaurant')
    } catch (e) {
      console.error('error postUser =>', e)
      setErrorPostUser('Houve um erro! Verifique os campos preenchidos!')
      setErrorPostUser(
        <>
          <MdOutlineError />
          Ops! Algum dos dados estão inválidos.
        </>
      )
    }
  }

  const handleLogin = () => {
    postLogin()
  }

  useEffect(() => {
    if(localStorage.idUser){
      authUser()
    }
  });

  async function authUser(){
    try {
      const response = await axios.get(`http://localhost:8080/users/authenticateSession/${localStorage.idUser}`)
      if(response.data){
        navigate('/searchRestaurant')
      }
    } catch (e) {
      console.error('error authUser =>', e)
    }
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
              <FormStyle.ErrorMessageLogin>
                {errorPostUser}
              </FormStyle.ErrorMessageLogin>
              <FormStyle.Input
                placeholder="Seu telefone ou email"
                maxLength={50}
                name="login"
                type="text"
                value={formLogin.login}
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
            <LoginStyle.Button onClick={handleLogin}>Iniciar</LoginStyle.Button>
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
