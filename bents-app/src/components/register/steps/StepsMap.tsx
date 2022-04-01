import { useState } from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { IoRestaurant } from 'react-icons/io5'

export const userTypeItems = [
  {
    icon: <FaUserFriends />,
    title: 'Usuário',
    description:
      'Você poderá compartihar suas críticas e descobrir lugares incríveis!'
  },
  {
    icon: <IoRestaurant />,
    title: 'Restaurante',
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
    name: 'tel',
    type: 'text',
    maxLength: 35,
    placeholder: '(11) 1234-5678',
    value: 'tel'
  },
  {
    label: 'E-mail',
    name: 'email',
    type: 'text',
    maxLength: 50,
    placeholder: 'email@dominio.com',
    value: 'email'
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
