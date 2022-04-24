import { FaUserFriends } from 'react-icons/fa'
import { IoRestaurant } from 'react-icons/io5'

export const userTypeItems = [
  {
    icon: <FaUserFriends />,
    title: 'Usuário',
    name: 'user',
    description:
      'Você poderá compartihar suas críticas e descobrir lugares incríveis!'
  },
  {
    icon: <IoRestaurant />,
    title: 'Restaurante',
    name: 'restaurant',
    description:
      'Venha descobrir como anda seu empreendimento através da visão de quem mais importa.'
  }
]

export const userDataItems = [
  {
    label: 'Nome',
    name: 'name',
    type: 'text',
    maxLength: 35,
    placeholder: 'Seu nome',
    value: 'name'
  },
  {
    label: 'Telefone',
    name: 'phone',
    type: 'text',
    maxLength: 35,
    placeholder: '(11) 1234-5678',
    value: 'phone',
    inputMode: 'numeric'
  },
  {
    label: 'E-mail',
    name: 'email',
    type: 'text',
    maxLength: 50,
    placeholder: 'email@dominio.com',
    value: 'email',
    inputMode: 'email'
  },
  {
    label: 'Senha',
    name: 'password',
    type: 'text',
    maxLength: 35,
    placeholder: 'Escolha uma senha forte',
    value: 'password'
  }
]

export const userAddressItems = [
  {
    label: 'CEP',
    name: 'cep',
    type: 'text',
    maxLength: 8,
    placeholder: 'Digite seu CEP',
    value: 'cep',
    inputMode: 'numeric'
  },
  {
    label: 'Estado',
    name: 'state',
    type: 'text',
    maxLength: 40,
    placeholder: 'Escolha o UF de seu estado',
    value: 'state'
  },
  {
    label: 'Endereço',
    name: 'address',
    type: 'text',
    maxLength: 60,
    placeholder: 'Rua Fulano da Silva, 123',
    value: 'address'
  },
  {
    label: 'Número',
    name: 'addressNumber',
    type: 'text',
    maxLength: 20,
    placeholder: 'Número da residência',
    value: 'addressNumber',
    inputMode: 'numeric'
  }
]
