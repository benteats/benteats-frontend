import { ReactComponent as FirstStepSVG } from '../../../assets/first-step.svg'
import { ReactComponent as SecondtStepSVG } from '../../../assets/second-step.svg'
import { ReactComponent as ThridStepSVG } from '../../../assets/thrid-step.svg'

export const stepsItems = [
  {
    icon: <FirstStepSVG />,
    step: 'PASSO 1',
    title: 'Perfil de usuário',
    description: 'Nos diga se você é um Cliente ou Empreendedor.'
  },
  {
    icon: <SecondtStepSVG />,
    step: 'PASSO 2',
    title: 'Dados pessoais',
    description: 'Aqui vamos saber um pouquinho mais sobre você.'
  },
  {
    icon: <ThridStepSVG />,
    step: 'PASSO 3',
    title: 'Endereço',
    description: 'Assim podemos encontrar o que há de melhor na sua região.'
  }
]
