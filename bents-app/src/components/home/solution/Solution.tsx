import { FaStar, FaMapMarkerAlt } from 'react-icons/fa'
import { BsChatSquareTextFill } from 'react-icons/bs'
import { IoRestaurant } from 'react-icons/io5'
import { ReactComponent as SolutionSVG } from '../../../assets/solution.svg'
import * as SolutionStyle from '../../../styles/home/solution/SolutionStyle'
import * as Global from '../../../styles/Global'
import { useState } from 'react'


export default function Hero() {
  const [solutionItems, setSolutionItems] = useState([
    {
      icon: <FaStar/>,
      title: 'Avaliações',
      description: 'Com o nosso sistema de notas, saiba quais as melhores opções facilmente!'
    },
    {
      icon: <BsChatSquareTextFill/>,
      title: 'Opiniôes',
      description: 'Conheça as experiências vividas por outros usuários de antemão!'
    },
    {
      icon: <IoRestaurant/>,
      title: 'Informações',
      description: 'Nunca mais fique perdido, as informações que você precisa na palma da sua mão!'
    },
    {
      icon: <FaMapMarkerAlt/>,
      title: 'Cardápio',
      description: 'Saiba se o seu prato predileto é servido, não fique mais na vontade!'
    }
  ])
  return (
    <>
      <Global.Container>
        <SolutionStyle.Container>
          <SolutionStyle.ContainerSVG>
            <SolutionSVG/>
          </SolutionStyle.ContainerSVG>
          <SolutionStyle.ContentSolutions>
            <div>
              <Global.Title>
                {`A melhor escolha na palma
                da sua mão`}
              </Global.Title>
              <Global.Description>
                Bents é um aplicativo totalmente voltado para o
                compartilhamento de experiências. O que importa é a sua opinião!
              </Global.Description>            
            </div>
            <SolutionStyle.SolutionGrid>
            {solutionItems.map((element, item) => (
               <SolutionStyle.SolutionItem key={item}>
                 {element.icon}
                 <h2>{element.title}</h2>
                 <p>{element.description}</p>
               </SolutionStyle.SolutionItem>
               )
            )}
            </SolutionStyle.SolutionGrid>
          </SolutionStyle.ContentSolutions>
        </SolutionStyle.Container>
      </Global.Container>
    </>
  )
}