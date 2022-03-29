import { ReactComponent as SolutionSVG } from '../../../assets/solution.svg'
import { solutionItems } from './SolutionMap'
import * as SolutionStyle from './Solution.style'
import * as Global from '../../../styles/Global'

export default function Hero() {
  return (
    <>
      <Global.Container id="section-solution">
        <SolutionStyle.Container>
          <SolutionStyle.ContainerSVG>
            <SolutionSVG />
          </SolutionStyle.ContainerSVG>
          <SolutionStyle.ContentSolutions>
            <div>
              <Global.Title>
                {`A melhor escolha na palma
                da sua mão`}
              </Global.Title>
              <Global.Description>
                Bents é um aplicativo totalmente voltado para o compartilhamento
                de experiências. O que importa é a sua opinião!
              </Global.Description>
            </div>
            <SolutionStyle.SolutionGrid>
              {solutionItems.map((element, item) => (
                <SolutionStyle.SolutionItem key={item}>
                  {element.icon}
                  <h2>{element.title}</h2>
                  <p>{element.description}</p>
                </SolutionStyle.SolutionItem>
              ))}
            </SolutionStyle.SolutionGrid>
          </SolutionStyle.ContentSolutions>
        </SolutionStyle.Container>
      </Global.Container>
    </>
  )
}
