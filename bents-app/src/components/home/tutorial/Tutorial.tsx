import { ReactComponent as FirstStepSVG } from '../../../assets/first-step.svg'
import { ReactComponent as SecondtStepSVG } from '../../../assets/second-step.svg'
import { ReactComponent as ThridStepSVG } from '../../../assets/thrid-step.svg'
import * as TutorialStyle from '../../../styles/home/tutorial/TutorialStyle'
import * as Global from '../../../styles/Global'
import * as SolutionStyle from '../../../styles/home/solution/SolutionStyle'
import { useState } from 'react'


export default function Hero() {
  const [solutionItems, setSolutionItems] = useState([
    {
      icon: <FirstStepSVG/>,
      step: 'PASSO 1',
      title: 'Perfil de usuário',
      description: 'Nos diga se você é um Cliente ou Empreendedor.'
    },
    {
      icon: <SecondtStepSVG/>,
      step: 'PASSO 2',
      title: 'Dados pessoais',
      description: 'Aqui vamos saber um pouquinho mais sobre você.'
    },
    {
      icon: <ThridStepSVG/>,
      step: 'PASSO 3',
      title: 'Endereço',
      description: 'Assim podemos encontrar o que há de melhor na sua região.'
    }
  ])
  return (
    <>
      <Global.Container>
        <TutorialStyle.Container>
          <TutorialStyle.TutorialTitleContainer>
            <TutorialStyle.TutorialTitle>
              {`Para começar é bem simples`}
            </TutorialStyle.TutorialTitle>
            <TutorialStyle.TutorialDescription>
              {`Basta se cadastrar e usufluir de tudo que o Bents tem a lhe oferecer. Facíl como contar até 3!`}
            </TutorialStyle.TutorialDescription>
            <TutorialStyle.SolutionGrid>
            {solutionItems.map((element, item) => (
               <SolutionStyle.SolutionItem key={item}>
                 {element.icon}
                 <h3>{element.step}</h3> 
                 <h2>{element.title}</h2>
                 <p>{element.description}</p>
               </SolutionStyle.SolutionItem>
               )
            )}
            </TutorialStyle.SolutionGrid>
          </TutorialStyle.TutorialTitleContainer>
          </TutorialStyle.Container>
      </Global.Container>
    </>
  )
}
