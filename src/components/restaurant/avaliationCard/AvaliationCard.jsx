import * as AvaliationCardStyle from './AvaliationCard.style'
import { FaStar } from 'react-icons/fa'

export default function AvaliationCard() {
    return (
        <>
            <AvaliationCardStyle.AvaliationCardContainer>
                <AvaliationCardStyle.AvaliationCardContent>
                    <AvaliationCardStyle.AvaliationCardHeader>
                        <AvaliationCardStyle.AvaliationCardImage>
                            <img src="https://conteudo.imguol.com.br/c/entretenimento/a1/2021/01/14/dwayne-the-rock-johnson-1610629270810_v2_900x506.jpg.webp" />
                        </AvaliationCardStyle.AvaliationCardImage>

                        <AvaliationCardStyle.AvaliationCardData>
                            <h2>Felipe Galvão</h2>
                            <p>07/12/2022</p>
                        </AvaliationCardStyle.AvaliationCardData>

                        <AvaliationCardStyle.AvaliationCardRating>
                            <FaStar />
                            <p>5,0</p>
                        </AvaliationCardStyle.AvaliationCardRating>
                    </AvaliationCardStyle.AvaliationCardHeader>

                    <AvaliationCardStyle.AvaliationCardMessage>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut culpa sed inventore maxime
                            maiores, ducimus delectus similique voluptatibus, possimus nulla. Quod, praesentium
                            exercitationem animi ipsa at nam iusto quas. 
                        </p>
                    </AvaliationCardStyle.AvaliationCardMessage>
                </AvaliationCardStyle.AvaliationCardContent>
            </AvaliationCardStyle.AvaliationCardContainer>
        
        </>
    )
}