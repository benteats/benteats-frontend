import { useState } from 'react'
import { StepDetails, StepTitles, StepDescription } from './RegisterMap'
import * as RegisterStyle from './Register.style'
import Header from '../../components/login/header/Header'
import UserAddress from '../../components/register/steps/UserAddress'
import UserData from '../../components/register/steps/UserData'
import UserType from '../../components/register/steps/UserType'

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

  const StepPage = () => {
    if (page === 0) {
      return <UserType page={page} setPage={setPage} />
    }
  }

  return (
    <>
      <Header />
      <RegisterStyle.Container>
        <RegisterStyle.Form>
          <RegisterStyle.Span>{StepDetails[page]}</RegisterStyle.Span>
          <RegisterStyle.ProgressBar>
            <RegisterStyle.ProgessBarUse
              style={{
                width: page === 0 ? '33.3%' : page == 1 ? '66.6%' : '100%'
              }}
            />
          </RegisterStyle.ProgressBar>
          <RegisterStyle.Title>{StepTitles[page]}</RegisterStyle.Title>
          <RegisterStyle.Description>
            {StepDescription[page]}
          </RegisterStyle.Description>
          {StepPage()}
        </RegisterStyle.Form>
      </RegisterStyle.Container>
    </>
  )
}
