import { useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { restaurantItems } from './StepsMap'
import { MdOutlineError } from 'react-icons/md'
import { api } from '../../../api/axios'
import { useEffect } from 'react'

export default function RestaurantInfo({ infoUser, setInfoUser }) {
  useEffect(() => {
    console.log(infoUser)
  }, [])
  const [errorPostUser, setErrorPostUser] = useState('')
  const [formData, setFormData] = useState({
    foodType: '',
    priceAverage: '',
    openingTime: '',
    closingTime: '',
    description: ''
  })
  const [formErrors, setFormErrors] = useState({
    foodType: '',
    priceAverage: '',
    openingTime: '',
    closingTime: '',
    description: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    return setFormData({ ...formData, [name]: value })
  }

  const validateFormStep = values => {
    let errors = { foodType: '', priceAverage: '', openingTime: '', closingTime: '', description: '' }
    const defaultMessage = 'Campo obrigatório'

    if (values.foodType.length < 5) {
      errors.foodType = defaultMessage
    }
    if (values.priceAverage.length < 6) {
      errors.priceAverage = defaultMessage
    }
    if (values.openingTime.length < 5) {
      errors.openingTime = defaultMessage
    }
    if (values.closingTime.length < 5) {
      errors.closingTime = defaultMessage
    }
    if (values.description.length < 5) {
      errors.description = defaultMessage
    }

    if (Object.values(errors).every(o => o === '')) {
      return registerRestaurant();
    }
    return errors
  }

  async function registerRestaurant() {
    try {
      console.log(formData)
      const response = await api.post(`/restaurants/${infoUser.idUser}`, {...formData})
      setInfoUser({ ...infoUser, idRestaurant: response.data })
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
        <StepsStyle.ContainerInput>
          <FormStyle.Label>Descrição</FormStyle.Label>
          <FormStyle.TextArea
            placeholder='Decrição do restaurante'
            name='description'
            value={formData.description}
            onChange={handleChange}
            rows='5'
          />
        </StepsStyle.ContainerInput>
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
