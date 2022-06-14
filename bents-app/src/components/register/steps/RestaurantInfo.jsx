import { useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { restaurantItems } from './StepsMap'
import { MdOutlineError } from 'react-icons/md'
import { api } from '../../../api/axios'

export default function RestaurantInfo({ setPage }) {
  const [errorPostUser, setErrorPostUser] = useState('')
  const [formData, setFormData] = useState({
    foodType: '',
    priceAverage: '',
    openingTime: '',
    closingTime: ''
  })
  const [formErrors, setFormErrors] = useState({
    foodType: '',
    priceAverage: '',
    openingTime: '',
    closingTime: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    return setFormData({ ...formData, [name]: value })
  }

  // const validateFormStep = values => {
  //   let errors = { cep: '', state: '', address: '', addressNumber: '' }
  //   const defaultMessage = 'Campo obrigatório'

  //   if (values.cep.length < 8) {
  //     errors.cep = defaultMessage
  //   }
  //   if (values.state.length < 2) {
  //     errors.state = defaultMessage
  //   }
  //   if (values.address.length < 5) {
  //     errors.address = defaultMessage
  //   }
  //   if (values.addressNumber.length < 1) {
  //     errors.addressNumber = defaultMessage
  //   }

  //   if (Object.values(errors).every(o => o === '')) {
  //     if(userType === 'user'){
  //       return postUser()
  //     }
  //     return postRestaurant();
  //   }
  //   return errors
  // }

  async function postUser() {
    try {
      await api.post(`/users/registerUser`)
      setPage(6)
    } catch (e) {
      console.error('error postUser =>', e)
      setErrorPostUser(
        <>
          <MdOutlineError /> Houve um erro! Verifique os campos preenchidos!
        </>
      )
    }
  }

  const handleSubmitStep = e => {
    e.preventDefault()
    setFormErrors(validateFormStep(formData))
  }

  return (
    <>
      <StepsStyle.Container>
        <StepsStyle.ContainerForm>
          {restaurantItems.map((element, item) => {
            const formDataValue = formData[element.name]
            return (
              <StepsStyle.ContainerInput key={item}>
                <FormStyle.Label>{element.label}</FormStyle.Label>
                <FormStyle.Input
                  placeholder={element.placeholder}
                  maxLength={element.maxLength}
                  name={element.name}
                  type={element.type}
                  value={formDataValue}
                  inputMode={element.inputMode}
                  onChange={handleChange}
                />
                <FormStyle.ErrorMessage>
                  {formErrors[element.name]}
                </FormStyle.ErrorMessage>
              </StepsStyle.ContainerInput>
            )
          })}
        </StepsStyle.ContainerForm>
        <FormStyle.ErrorMessageLogin>{errorPostUser}</FormStyle.ErrorMessageLogin>
        <StepsStyle.ContainerButton>
          <FormStyle.Button type="button" onClick={(handleSubmitStep)}>
            Próximo
          </FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}
