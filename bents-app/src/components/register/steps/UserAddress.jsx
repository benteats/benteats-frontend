import { useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { userAddressItems } from './StepsMap'
import axios from 'axios'

export default function UserAddress({ formData, setFormData, setPage, userType }) {
  const [errorPostUser, setErrorPostUser] = useState('')
  const [formErrors, setFormErrors] = useState({
    cep: '',
    state: '',
    address: '',
    addressNumber: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    if (name == 'cep') {
      let maskedValue = e.target.value
      maskedValue = maskedValue.replace(/\D+/g, '')
      maskedValue.length == 8 ? findCEP(maskedValue) : ''
      return setFormData({
        ...formData,
        cep: maskedValue
      })
    }
    return setFormData({ ...formData, [name]: value })
  }

  const findCEP = name => {
    fetch(`https://cep.awesomeapi.com.br/json/${name}`).then(res =>
      res.json().then(data => {
        if(res.status == 200){
          setErrorPostUser('')
          setFormData({
            ...formData,
            cep: name,
            address: `${data.address} - ${data.district}`,
            state: `${data.state} - ${data.city}`,
            city: data.city,
            district: data.district,
            lat: data.lat,
            lng: data.lng
          })
        } else {
          setErrorPostUser('Não conseguimos encontrar um endereço com o seu CEP ;(')
        }
      })
    )
  }

  const validateFormStep = values => {
    let errors = { cep: '', state: '', address: '', addressNumber: '' }
    const defaultMessage = 'Campo obrigatório'

    if (values.cep.length < 8) {
      errors.cep = defaultMessage
    }
    if (values.state.length < 2) {
      errors.state = defaultMessage
    }
    if (values.address.length < 5) {
      errors.address = defaultMessage
    }
    if (values.addressNumber.length < 1) {
      errors.addressNumber = defaultMessage
    }

    if (Object.values(errors).every(o => o === '')) {
      if(userType == 'user'){
        return postUser()
      }
      return postRestaurant();
    }
    return errors
  }

  async function postUser() {
    try {
      await axios.post('http://localhost:8080/users', formData)
      setPage(3)
    } catch (e) {
      console.error('error postUser =>', e)
      setErrorPostUser('Houve um erro! Verifique os campos preenchidos!')
    }
  }

  async function postRestaurant() {
    try {
      await axios.post('http://localhost:8080/restaurants', formData)
      setPage(3)
    } catch (e) {
      console.error('error postRestaurant =>', e)
      setErrorPostUser('Houve um erro! Verifique os campos preenchidos!')
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
          {userAddressItems.map((element, item) => {
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
          <FormStyle.ErrorMessage>{errorPostUser}</FormStyle.ErrorMessage>
        </StepsStyle.ContainerForm>
        <StepsStyle.ContainerButton>
          <FormStyle.PrevButton
            type="button"
            onClick={() => {
              setPage(currPage => currPage - 1)
            }}
          >
            Anterior
          </FormStyle.PrevButton>
          <FormStyle.Button type="button" onClick={handleSubmitStep}>
            Concluir
          </FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}