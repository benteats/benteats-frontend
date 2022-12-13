import * as NewCommentStyle from './NewComment.style'
import { ReactComponent as AvatarSVG } from '../../../../assets/avatar.svg'
import { TbSend } from 'react-icons/tb'
import { FaStar } from 'react-icons/fa'
import TextareaAutosize from 'react-textarea-autosize'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { api } from '../../../../api/axios'
import Notify from '../../../notify/Notify'

export default function NewComment({ isSentAvaliation, setIsSentAvaliation }) {
  const { userData } = useContext(AuthContext)
  const params = useParams()
  const restaurantId = params.id

  const ratingList = [
    { label: 'Pessimo' },
    { label: 'Ruim' },
    { label: 'Mediano' },
    { label: 'Bom' },
    { label: 'Excelente' }
  ]

  const initialUserComment = {
    idUser: 0,
    idRestaurant: 0,
    dhAvaliation: 0,
    rating: 0,
    comment: ''
  }

  const [formDataNotify, setFormDataNotify] = useState({
    message: '',
    visible: false,
    render: false
  })

  // const [isSentAvaliation, setIsSentAvaliation] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [labelRate, setLabelRate] = useState(ratingList[0].label)
  const [userComment, setUserComment] = useState(initialUserComment)

  const handleChangeComment = e => {
    setUserComment({ ...userComment, comment: e.target.value })
  }

  const handleRating = e => {
    setUserComment({ ...userComment, rating: e + 1 })
    setTimeout(() => {
      setIsOpen(false)
    }, '500')
  }

  const handleSubmit = () => {
    const currentDate = moment().format('YYYY-MM-DD')
    setUserComment({
      ...userComment,
      idUser: userData.idUser,
      idRestaurant: restaurantId,
      dhAvaliation: currentDate
    })
    validateUserComment(userComment)
  }

  async function postAvaliation() {
    try {
      setIsSentAvaliation(true)
      await api.post(
        `/avaliations/${userComment.idUser}/${userComment.idRestaurant}`,
        {
          ...userComment
        }
      )
    } catch (e) {
      console.error('error postAvaliation =>', e)
    }
  }

  const validateUserComment = values => {
    const initialValue = Object.values(initialUserComment)
    const labelValue = [
      'id do usuário',
      'id do restaurante',
      'Horário',
      'Avaliação',
      'Comentário'
    ]
    const errors = []
    Object.values(values).forEach((element, index) => {
      if (errors.length > 0) {
        if (element == initialValue[index]) {
          errors.push(` e ${labelValue[index]} inválido`)
        }
      } else {
        if (element == initialValue[index]) {
          errors.push(`${labelValue[index]} é inválido`)
        }
      }
    })
    console.log(errors)
    if (errors.length > 0 && errors.length <= 2) {
      setFormDataNotify({
        ...formDataNotify,
        visible: true,
        message: errors
      })
      return
    }
    if (errors.length > 0) {
      return
    }
    postAvaliation()
  }

  return (
    <>
      <Notify
        formDataNotify={formDataNotify}
        setFormDataNotify={setFormDataNotify}
      />
      <NewCommentStyle.Container>
        <AvatarSVG />
        <TextareaAutosize
          placeholder="Adicione uma avaliação"
          onChange={handleChangeComment}
          disabled={isSentAvaliation}
        />
        <div>
          <NewCommentStyle.SelectRate className={isOpen ? 'opened' : ''}>
            <h1>{labelRate}</h1>
            <div>
              {ratingList.map((item, index) => {
                return (
                  <NewCommentStyle.Star
                    key={index}
                    className={userComment.rating - 1 >= index ? 'clicked' : ''}
                    onClick={() => {
                      setLabelRate(item.label)
                      handleRating(index)
                    }}
                  />
                )
              })}
            </div>
          </NewCommentStyle.SelectRate>
          <NewCommentStyle.RateBtn onClick={() => setIsOpen(!isOpen)}>
            <FaStar />
          </NewCommentStyle.RateBtn>
        </div>
        <button
          onClick={handleSubmit}
          className={isSentAvaliation ? 'sentAvaliation' : ''}
          disabled={isSentAvaliation}
        >
          <TbSend />
        </button>
      </NewCommentStyle.Container>
    </>
  )
}
