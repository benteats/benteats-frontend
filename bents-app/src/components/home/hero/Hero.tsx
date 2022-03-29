import { ReactComponent as HeroSVG } from '../../../assets/hero.svg'
import { css } from '@emotion/react'
import * as HeroStyle from './Hero.style'
import * as Global from '../../../styles/Global'

export default function Hero() {
  return (
    <>
      <Global.Container id="section-hero" css={css({ marginTop: '50px' })}>
        <HeroStyle.Container>
          <HeroStyle.HeroTitleContainer>
            <HeroStyle.HeroTitle>
              {`Viva Momentos Compartilhe Histórias.`}
            </HeroStyle.HeroTitle>
            <HeroStyle.HeroDescription>
              {`Faça parte de uma comunidade que quer e  se importa com sua opinião,
              venha compartilhar suas vivências!`}
            </HeroStyle.HeroDescription>
            <Global.Button>Comece Já</Global.Button>
          </HeroStyle.HeroTitleContainer>
          <HeroStyle.HeroSVGContainer>
            <HeroSVG />
          </HeroStyle.HeroSVGContainer>
        </HeroStyle.Container>
      </Global.Container>
    </>
  )
}
