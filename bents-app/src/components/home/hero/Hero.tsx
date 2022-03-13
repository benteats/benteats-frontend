import { ReactComponent as HeroSVG } from '../../../assets/hero.svg'
import * as HeroStyle from '../../../styles/home/hero/HeroStyle'
import * as Global from '../../../styles/Global'

export default function Hero() {
  return (
    <>
      <Global.Container>
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
