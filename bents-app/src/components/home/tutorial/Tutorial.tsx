import { ReactComponent as HeroSVG } from '../../../assets/hero.svg'
import * as TutorialStyle from '../../../styles/home/tutorial/TutorialStyle'
import * as Global from '../../../styles/Global'

export default function Hero() {
  return (
    <>
      <Global.Container>
        <TutorialStyle.Container>
          <TutorialStyle.HeroTitleContainer>
            <TutorialStyle.TutorialTitle>
              {`Para começar é bem simples`}
            </TutorialStyle.TutorialTitle>
            <TutorialStyle.TutorialDescription>
              {`Basta se cadastrar e usufluir de tudo que o Bents tem a lhe oferecer. Facíl como contar até 3!`}
            </TutorialStyle.TutorialDescription>
          </TutorialStyle.HeroTitleContainer>
          <TutorialStyle.HeroSVGContainer>
            <HeroSVG />
          </TutorialStyle.HeroSVGContainer>
        </TutorialStyle.Container>
      </Global.Container>
    </>
  )
}
