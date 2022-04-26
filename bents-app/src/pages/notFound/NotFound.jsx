import { ReactComponent as NotFoundSVG } from '../../assets/not-found.svg'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/login/header/Header'
import * as NotFoundStyle from './NotFound.style'
import * as Global from '../../styles/Global'

export default function NotFound() {
  let navigate = useNavigate()

  return (
    <>
      <Header />
      <NotFoundStyle.Container>
        <NotFoundStyle.ContentNotFound>
          <NotFoundStyle.NotFoundTitle>404</NotFoundStyle.NotFoundTitle>
          <NotFoundStyle.NotFoundSubTitle>
            Ooops! Página não encontrada
          </NotFoundStyle.NotFoundSubTitle>
          <NotFoundStyle.NotFoundDescription>
            <NotFoundStyle.Description>
              Nos informe se você é um Usuário em busca de novos locais e
              opiniôes. Ou um empreendedor querendo melhorar através de
              feedbacks.
            </NotFoundStyle.Description>
          </NotFoundStyle.NotFoundDescription>
          <Global.Button
            onClick={() => {
              navigate('/')
            }}
          >
            Voltar ao Inicio
          </Global.Button>
        </NotFoundStyle.ContentNotFound>
        <NotFoundStyle.NotFoundImage>
          <NotFoundSVG />
        </NotFoundStyle.NotFoundImage>
      </NotFoundStyle.Container>
    </>
  )
}
