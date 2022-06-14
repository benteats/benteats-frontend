import { useState } from 'react'
import { StepDetails, StepTitles, StepDescription } from './RegisterMap'
import * as RegisterStyle from './Register.style'
import Header from '../../components/login/header/Header'
import UserAddress from '../../components/register/steps/UserAddress'
import UserData from '../../components/register/steps/UserData'
import UserType from '../../components/register/steps/UserType'
import CreatedAccount from '../../components/register/steps/CreatedAccount'
import CreatedRestaurantAccount from '../../components/register/steps/CreatedRestaurantAccount'
import RestaurantInfo from '../../components/register/steps/RestaurantInfo'
// import RestaurantImages from '../../../components/register/steps/RestaurantImages'
// import FinishedRegister from '../../../components/steps/FinishedRegister'

export default function Register() {
  const [page, setPage] = useState(5)
  const [userType, setUserType] = useState('')
  const [idRestaurant, setIdRestaurant] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    cep: '',
    state: '',
    city: '',
    district: '',
    address: '',
    addressNumber: '',
    lat: '',
    lng: ''
  })

  const [checkboxItems, setCheckboxItems] = useState([
    {
      checked: false,
      name: 'user'
    },
    {
      checked: false,
      name: 'restaurant'
    }
  ])

  const StepPage = () => {
    if (page === 0) {
      return (
        <UserType
        formData={formData}
        setFormData={setFormData}
        setPage={setPage}
        checkboxItems={checkboxItems}
        setCheckboxItems={setCheckboxItems}
        userType={userType}
        setUserType={setUserType}
        />
      )
    }
    if (page === 1) {
      return (
        <UserData
        formData={formData}
        setFormData={setFormData}
        setPage={setPage}
        />
      )
    }
    if (page === 2) {
      return (
        <UserAddress
        formData={formData}
        setFormData={setFormData}
        setPage={setPage}
        userType={userType}
        />
      )
    }
    if (page === 3) {
      return <CreatedAccount />
    }
    if (page === 4) {
      return (
        <CreatedRestaurantAccount
        setPage={setPage}
        setIdRestaurant={setIdRestaurant}
        />
      )
    }
    if (page === 5) {
      return (
        <RestaurantInfo
        setPage={setPage}
        />
      )
    }
    // if (page === 6) {
    //   return (
    //     <RestaurantInfo
    //     setPage={setPage}
    //     />
    //   )
    // }
    // if (page === 7) {
    //   return (
    //     <FinishedRegister />
    //   )
    // }
  }

  return (
    <>
      <Header />
      <RegisterStyle.Container>
        <RegisterStyle.Form>
          <RegisterStyle.Span>{StepDetails[page]}</RegisterStyle.Span>
          <RegisterStyle.ProgressBar
            style={{ display: page === 3 || page === 4 ? 'none' : '' }}
          >
            <RegisterStyle.ProgessBarUse
              style={{
                width: page === 0 ? '33.3%' : page == 1 ? '66.6%' : '100%',
                display: page <= 3 ? 'block' : 'none'
              }}
            />
            <RegisterStyle.ProgessBarUse
              style={{
                width: page === 5 ? '33.3%' : '100',
                display: page >= 5 ? 'block' : 'none'
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
