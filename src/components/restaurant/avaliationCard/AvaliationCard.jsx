import * as AvaliationCardStyle from './AvaliationCard.style'
import { FaStar } from 'react-icons/fa'
import moment from 'moment'
import { ReactComponent as AvatarSVG } from '../../../assets/avatar.svg'
import NewComment from './newComment/NewComment'
import { useState, useEffect } from 'react'
import { api } from '../../../api/axios'

export default function AvaliationCard({
  avaliationResult,
  setAvaliationResult,
  restaurantId
}) {
  const [isSentAvaliation, setIsSentAvaliation] = useState(false)
  async function getAvaliationById() {
    try {
      const response = await api.get(
        `avaliations/getAvaliationsByIdRestaurant/${restaurantId}`
      )
      const respondeDescSortById = response.data.sort(
        (a, b) => b.idAvaliation - a.idAvaliation
      )
      setAvaliationResult(respondeDescSortById)
    } catch (e) {
      console.error('error getAvaliationById =>', e)
    }
  }

  useEffect(() => {
    if (isSentAvaliation) {
      getAvaliationById()
    }
  }, [isSentAvaliation])

  return (
    <>
      <NewComment
        isSentAvaliation={isSentAvaliation}
        setIsSentAvaliation={setIsSentAvaliation}
      />
      <AvaliationCardStyle.Container>
        {avaliationResult.map(item => {
          return (
            <AvaliationCardStyle.AvaliationCardContainer
              key={item.idAvaliation}
            >
              <AvaliationCardStyle.AvaliationCardContent>
                <AvaliationCardStyle.AvaliationCardHeader>
                  <AvaliationCardStyle.AvaliationCardImage>
                    <AvatarSVG />
                  </AvaliationCardStyle.AvaliationCardImage>
                  <AvaliationCardStyle.AvaliationCardData>
                    <h2>{item.user.name}</h2>
                    <p>{moment(item.dhAvaliation).format('DD/MM/YYYY')}</p>
                  </AvaliationCardStyle.AvaliationCardData>
                  <AvaliationCardStyle.AvaliationCardRating>
                    <FaStar />
                    <p>{item.rating}</p>
                  </AvaliationCardStyle.AvaliationCardRating>
                </AvaliationCardStyle.AvaliationCardHeader>
                <AvaliationCardStyle.AvaliationCardMessage>
                  <p>{item.comment}</p>
                </AvaliationCardStyle.AvaliationCardMessage>
              </AvaliationCardStyle.AvaliationCardContent>
            </AvaliationCardStyle.AvaliationCardContainer>
          )
        })}
      </AvaliationCardStyle.Container>
    </>
  )
}
