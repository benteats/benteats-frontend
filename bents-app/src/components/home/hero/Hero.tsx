import { ReactComponent as HeroSVG } from '../../../assets/hero.svg'
import { css } from '@emotion/react'
import * as HeroStyle from '../../../styles/home/hero/HeroStyle'
import * as Global from '../../../styles/Global'

export default function Hero() {
  return (
    <>
      <Global.Container
      id='section-hero'
      css={css({ marginTop: '100px' })}>
        <HeroStyle.Container>
          <HeroStyle.HeroTitleContainer>
            <HeroStyle.HeroTitle>
              {`Viva Momentos Compartilhe Histórias.`}
            </HeroStyle.HeroTitle>
            <HeroStyle.HeroDescription>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.`}
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
