import * as NewFoodStyle from './NewFood.style'
import { useState, useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import DropFileInputFood from '../../../../components/dropFileInputFood/DropFileInputFood'
import { api } from '../../../../api/axios'

export default function NewFood({ isOpen, setIsOpen, setIsUpdated }) {
  const { userData } = useContext(AuthContext)
  const [idFood, setIdFood] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [listImages, setListImages] = useState('')
  const [newFoodData, setNewFoodData] = useState({
    name: '',
    price: '',
    description: '',
    price: ''
  })
  const listLabels = [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      maxLength: 35,
      placeholder: 'Nome do prato',
      value: 'name'
    },
    {
      label: 'Preço',
      name: 'price',
      type: 'text',
      maxLength: 35,
      placeholder: 'Preço',
      value: 'price'
    },
    {
      label: 'Desrição',
      name: 'description',
      type: 'text',
      maxLength: 35,
      placeholder: 'Breve descrição',
      value: 'description'
    }
  ]

  const handleChange = e => {
    console.log(newFoodData)
    const { name, value } = e.target
    return setNewFoodData({ ...newFoodData, [name]: value })
  }

  async function postNewFood() {
    try {
      const response = await api.post(`/foods/${userData.idRestaurant}`, {
        ...newFoodData
      })
      setIdFood(response.data)
      setIsUpdated(true)
      console.log(response.data)
    } catch (e) {
      console.error('error postNewFood =>', e)
    }
  }

  const handleSubmit = () => {
    if (currentStep == 0) {
      setCurrentStep(1)
      postNewFood()
    }
    if (currentStep == 1) {
      handleSubmitStep()
      setIsOpen(false)
    }
  }

  const handleCancelBtn = () => {
    if (currentStep == 0) {
      setIsOpen(false)
    }
    if (currentStep == 1) {
      setCurrentStep(0)
    }
  }

  const handleSubmitStep = async e => {
    let formData = new FormData()
    formData.append('foodImage', listImages[0])
    try {
      api.post(`/foods/uploadImage/${idFood}`, formData)
    } catch (e) {
      console.error('error handleSubmitStep =>', e)
    }
  }

  return (
    <>
      <NewFoodStyle.Overlay className={isOpen ? 'isClicked' : ''}>
        <NewFoodStyle.Modal>
          <NewFoodStyle.ModalContainer>
            <NewFoodStyle.Title>
              <NewFoodStyle.Field>Cadastrar novo prato</NewFoodStyle.Field>
              <NewFoodStyle.Value>
                Descreva sobre o prato nos campos.
              </NewFoodStyle.Value>
            </NewFoodStyle.Title>
            {currentStep == 0 ? (
              <>
                {listLabels.map((element, index) => {
                  return (
                    <NewFoodStyle.InputContainer key={index}>
                      <label>{element.label}</label>
                      <input
                        placeholder={element.placeholder}
                        maxLength={element.maxLength}
                        name={element.name}
                        type={element.type}
                        value={newFoodData[element.name]}
                        inputMode={element.inputMode}
                        onChange={handleChange}
                      />
                    </NewFoodStyle.InputContainer>
                  )
                })}
              </>
            ) : (
              <NewFoodStyle.ContainerUpload>
                <DropFileInputFood
                  listImages={listImages}
                  setListImages={setListImages}
                />
              </NewFoodStyle.ContainerUpload>
            )}

            <NewFoodStyle.ButtonContainer>
              <NewFoodStyle.CancelBtn onClick={handleCancelBtn}>
                {currentStep == 0 ? 'Cancelar' : 'Voltar'}
              </NewFoodStyle.CancelBtn>
              <NewFoodStyle.SaveBtn onClick={handleSubmit}>
                {currentStep == 0 ? 'Avançar' : 'Enviar'}
              </NewFoodStyle.SaveBtn>
              {/* <NewFoodStyle.ErrorMessage>ssa</NewFoodStyle.ErrorMessage> */}
            </NewFoodStyle.ButtonContainer>
          </NewFoodStyle.ModalContainer>
        </NewFoodStyle.Modal>
      </NewFoodStyle.Overlay>
    </>
  )
}
