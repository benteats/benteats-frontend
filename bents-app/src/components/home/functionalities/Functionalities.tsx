import * as Global from '../../../styles/Global'
import * as Funcionalities from '../../../styles/home/funtionalities/FunctionalitiesStyle'
import { useState } from 'react'
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa'
import { BsChatSquareTextFill } from 'react-icons/bs'
import { IoRestaurant } from 'react-icons/io5'
import * as SolutionStyle from '../../../styles/home/solution/SolutionStyle'


export default function functionalities() {
    const [funcionalitiesItem, setSolutionItems] = useState([
        {
          icon: <FaStar/>,
          title: 'Ranking da Região',
          description: 'Saiba o que há de melhor para se deliciar em sua região.'
        },
        {
          icon: <BsChatSquareTextFill/>,
          title: 'Compartilhar críticas',
          description: 'Sua opinião deve ser levada em conta. Ajude a comunidade aravés de suas indicações.'
        },
        {
          icon: <IoRestaurant/>,
          title: 'Alertas sobre favoritos',
          description: 'Receba alertas quando seus Restaurantes favoritos alteram alguma informação ou postam algo.'
        },
        {
          icon: <FaMapMarkerAlt/>,
          title: 'Interação com os Clientes',
          description: 'Você pdoerá interagir com as crítica feitas, assim podendo agradecer ou melhorar o ponto citado'
        },
        {
            icon: <FaMapMarkerAlt/>,
            title: 'Maior atratividade de Clientela',
            description: 'Estar entre os amis bem avaliados é um markting fluído e natural trazendo prestigio ao seu empreendimento'
        },
        {
            icon: <FaMapMarkerAlt/>,
            title: 'Divulgação de suas novidades',
            description: 'Não deixe seus clientes de fora de suas novidades e lançamentos através das notificações'
        }  
      ])
    return (
        <>
            <Global.Container>
                <Funcionalities.Container>
                    <Funcionalities.Title>
                        {`Com o Bents você terá`}
                    </Funcionalities.Title>
                    <Funcionalities.DescriptionText>
                        {`Funcionalidades que irão beneficiar tanto o Cliente como
                         Empreendedores buscando a melhor
                          qualidade possível.`}
                    </Funcionalities.DescriptionText>

                    <Funcionalities.FuncionalitiesGrid>
                    {funcionalitiesItem.map((element, item) => (
                        <Funcionalities.FuncionalitiesItem key={item}>
                            {element.icon}
                            <h2>{element.title}</h2>
                            <p>{element.description}</p>
                        </Funcionalities.FuncionalitiesItem>
                        )    
                    )}
                    </Funcionalities.FuncionalitiesGrid>

                </Funcionalities.Container>
            </Global.Container>
        </>
    )
}