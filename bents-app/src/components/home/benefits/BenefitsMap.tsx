import { FaUserFriends, FaBell } from 'react-icons/fa'
import { GiProgression } from 'react-icons/gi'
import { IoPodium, IoMegaphone } from 'react-icons/io5'
import { MdOutlineWifiTethering } from 'react-icons/md'

export const benefitsItems = [
  {
    icon: <IoPodium />,
    title: 'Ranking da Região',
    description: 'Saiba o que há de melhor para se deliciar em sua região.'
  },
  {
    icon: <FaUserFriends />,
    title: 'Compartilhar críticas',
    description:
      'Sua opinião deve ser levada em conta. Ajude a comunidade aravés de suas indicações.'
  },
  {
    icon: <FaBell />,
    title: 'Alertas sobre favoritos',
    description:
      'Receba alertas quando seus Restaurantes favoritos alteram alguma informação ou postam algo.'
  },
  {
    icon: <IoMegaphone />,
    title: 'Interação com os Clientes',
    description:
      'Você pdoerá interagir com as crítica feitas, assim podendo agradecer ou melhorar o ponto citado'
  },
  {
    icon: <GiProgression />,
    title: 'Maior atratividade de Clientela',
    description:
      'Estar entre os amis bem avaliados é um markting fluído e natural trazendo prestigio ao seu empreendimento'
  },
  {
    icon: <MdOutlineWifiTethering />,
    title: 'Divulgação de suas novidades',
    description:
      'Não deixe seus clientes de fora de suas novidades e lançamentos através das notificações'
  }
]
