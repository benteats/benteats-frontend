import * as NotifyStyle from './Notify.style'
import { ReactComponent as Loading } from '../../assets/loading.svg'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { MdOutlineError } from 'react-icons/md'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Notify({ formDataNotify, setFormDataNotify }) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(formDataNotify.visible)
  }, [formDataNotify])

  const handleClose = () => {
    setFormDataNotify({ render: true })
    setIsVisible(!isVisible)
  }
  return (
    <>
      {isVisible && (
        <NotifyStyle.Overlay>
          <NotifyStyle.Notify>
            <NotifyStyle.NotifyContainer>
              {/* <NotifyStyle.Header>
              <h1>Title</h1>
              <p>Description</p>
            </NotifyStyle.Header> */}
              <NotifyStyle.Steps>
                <li>
                  {/* <BsFillCheckCircleFill />
                <span>Concluído</span> */}
                  {/* <Loading />
                <span>Carregando</span> */}
                  <MdOutlineError />
                  <span>{formDataNotify.message}</span>
                </li>
                <NotifyStyle.Close onClick={handleClose} />
              </NotifyStyle.Steps>
            </NotifyStyle.NotifyContainer>
          </NotifyStyle.Notify>
        </NotifyStyle.Overlay>
      )}
    </>
  )
}
