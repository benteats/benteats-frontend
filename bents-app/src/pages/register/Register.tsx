import { useState } from 'react'
import Header from '../../components/login/header/Header'
import UserAddress from '../../components/register/steps/UserAddress'
import UserData from '../../components/register/steps/UserData'
import UserType from '../../components/register/steps/UserType'
import { StepDetails, StepTitles, StepDescription } from './RegisterMap'

export default function Register() {
  const [page, setPage] = useState(0)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    date: '',
    formattedDate: '',
    address: '',
    services: {
      listServices: ''
    },
    typeClient: '',
    area: '',
    message: ''
  })

  // const StepPage = () => {
  //   if (page === 0) {
  //     return (
  //       <UserType
  //         page={page}
  //         setPage={setPage}
  //         formData={formData}
  //         setFormData={setFormData}
  //       />
  //     )
  //   } else if (page === 1) {
  //     return <UserData page={page} setPage={setPage} formData={formData} />
  //   } else {
  //     return (
  //       <UserAddress
  //         page={page}
  //         setPage={setPage}
  //         formData={formData}
  //         setFormData={setFormData}
  //       />
  //     )
  //   }
  // }

  return (
    <>
      <Header />
      <UserType />
    </>
  )
}
