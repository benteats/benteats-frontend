import * as AvaliationCardStyle from './AvaliationCard.style'
import { FaStar } from 'react-icons/fa'
import { useEffect } from 'react'
import moment from 'moment'

export default function AvaliationCard({ avaliationResult }) {
  return (
    <>
      <AvaliationCardStyle.Container>
        {avaliationResult.map(item => {
          return (
            <AvaliationCardStyle.AvaliationCardContainer
              key={item.idAvaliation}
            >
              <AvaliationCardStyle.AvaliationCardContent>
                <AvaliationCardStyle.AvaliationCardHeader>
                  <AvaliationCardStyle.AvaliationCardImage>
                    <img src="https://conteudo.imguol.com.br/c/entretenimento/a1/2021/01/14/dwayne-the-rock-johnson-1610629270810_v2_900x506.jpg.webp" />
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
