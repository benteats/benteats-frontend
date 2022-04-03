import { useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { userAddressItems } from './StepsMap'

export default function UserAddress({ formData, setFormData, setPage }) {
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
        console.log(data)
        setFormData({
          ...formData,
          cep: name,
          address: `${data.address} - ${data.district}`,
          state: `${data.state} - ${data.city}`,
          fullAddress: data
        })
      })
    )
  }

  const validateFormStep = values => {
    console.log(values)
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
      console.log('Enviado!')
    }
    return errors
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
                  onChange={handleChange}
                />
                <FormStyle.ErrorMessage>
                  {formErrors[element.name]}
                </FormStyle.ErrorMessage>
              </StepsStyle.ContainerInput>
            )
          })}
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
