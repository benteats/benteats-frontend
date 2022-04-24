import { stepsItems } from './StepsMap'
import * as TutorialStyle from './Steps.style'
import * as Global from '../../../styles/Global'

export default function Steps() {
  return (
    <>
      <Global.Container id="section-steps">
        <TutorialStyle.Container>
          <TutorialStyle.TutorialTitleContainer>
            <TutorialStyle.TutorialTitle>
              {`Para começar é bem simples`}
            </TutorialStyle.TutorialTitle>
            <TutorialStyle.TutorialDescription>
              {`Basta se cadastrar e usufluir de tudo que o Bents tem a lhe oferecer. Facíl como contar até 3!`}
            </TutorialStyle.TutorialDescription>
          </TutorialStyle.TutorialTitleContainer>
          <TutorialStyle.SolutionGrid>
            {stepsItems.map((element, item) => (
              <TutorialStyle.SolutionItem key={item}>
                {element.icon}
                <h3>{element.step}</h3>
                <h2>{element.title}</h2>
                <p>{element.description}</p>
              </TutorialStyle.SolutionItem>
            ))}
          </TutorialStyle.SolutionGrid>
        </TutorialStyle.Container>
      </Global.Container>
    </>
  )
}
