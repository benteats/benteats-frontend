import { ReactComponent as EatingSVG } from '../../../assets/eating.svg'
import * as OpinionStyle from './Opinion.style'
import * as Global from '../../../styles/Global'

// RiSearchLine
// AiOutlineMenu


export default function Opinion() {
  return (
    <>
      <Global.BlueContainer id="section-solution">
        <OpinionStyle.Container>
          <OpinionStyle.OpinionTitleContainer>
            <OpinionStyle.OpinionTitle>
              {`Você sabe o quanto sua opinião é importante para os outros?`}
            </OpinionStyle.OpinionTitle>
            <OpinionStyle.OpinionDescription>
              {`Sua crítica sempre é bem vinda, pois todos nós gostamos de receber elogios mas quando devemos melhorar é sempre melhor quando nos dizem exatamente o que fazer!`}
            </OpinionStyle.OpinionDescription>
            <OpinionStyle.Button>Faça Parte!</OpinionStyle.Button>
          </OpinionStyle.OpinionTitleContainer>
          <OpinionStyle.OpinionSVGContainer>
            <EatingSVG />
          </OpinionStyle.OpinionSVGContainer>
        </OpinionStyle.Container>
      </Global.BlueContainer>
    </>
  )
}
