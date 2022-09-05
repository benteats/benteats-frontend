import * as NotifyStyle from './Notify.style'
import { ReactComponent as Loading } from '../../assets/loading.svg'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { MdOutlineError } from 'react-icons/md'

export default function Notify({ formData, isLoading, setIsLoading }) {
  return (
    <>
      <NotifyStyle.Overlay>
        <NotifyStyle.Notify>
          <NotifyStyle.NotifyContainer>
            <NotifyStyle.Header>
              <h1>{formData.title}</h1>
              <p>{formData.description}</p>
            </NotifyStyle.Header>
            <NotifyStyle.Steps>
              <li>
                {/* <BsFillCheckCircleFill />
                <span>Concluído</span> */}
                {/* <Loading />
                <span>Carregando</span> */}
                <MdOutlineError />
                <span>Ops! Não foi possível enviar, verifique o arquivo</span>
              </li>
            </NotifyStyle.Steps>
          </NotifyStyle.NotifyContainer>
        </NotifyStyle.Notify>
      </NotifyStyle.Overlay>
    </>
  )
}
