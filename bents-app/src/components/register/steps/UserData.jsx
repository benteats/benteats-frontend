import { useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { userDataItems } from './StepsMap'

export default function UserData({ formData, setFormData, setPage }) {
  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    if (name == 'phone') {
      let maskedValue = e.target.value
      maskedValue = maskedValue
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
      return setFormData({ ...formData, phone: maskedValue })
    }
    return setFormData({ ...formData, [name]: value })
  }

  const validateFormStep = values => {
    let errors = { name: '', phone: '', email: '', password: '' }
    const defaultMessage = 'Campo obrigatório'
    const regexName = /^(?=.{2,50}$)[a-zA-Z'.]+(?:\s[a-zA-Z'.]+)*$/
    const regexPhone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const regexPassword = /^(?=.*[0-9]{3})(?=.*[A-z]{1})[A-z0-9]{6,}$/

    if (values.name.length < 3) {
      errors.name = defaultMessage
    } else if (!regexName.test(values.name)) {
      errors.name = 'Contém espaços em branco'
    }
    if (values.phone.length < 15) {
      errors.phone = defaultMessage
    } else if (!regexPhone.test(values.phone)) {
      errors.phone = 'Telefone inválido'
    }
    if (!values.email) {
      errors.email = defaultMessage
    } else if (!regexEmail.test(values.email)) {
      errors.email = 'Formato inválido!'
    }
    if (!values.password) {
      errors.password = defaultMessage
    } else if (!regexPassword.test(values.password)) {
      errors.password = 'É necessário conter letras maiúsculas e números'
    }
    if (Object.values(errors).every(o => o === '')) {
      setPage(currPage => currPage + 1)
      window.scrollTo(0, 0)
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
          {userDataItems.map((element, item) => {
            return (
              <StepsStyle.ContainerInput key={item}>
                <FormStyle.Label>{element.label}</FormStyle.Label>
                <FormStyle.Input
                  placeholder={element.placeholder}
                  maxLength={element.maxLength}
                  name={element.name}
                  type={element.type}
                  value={formData[element.name]}
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
            Próximo
          </FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}
