import { useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { userDataItems } from './StepsMap'

export default function UserData({ formData, setFormData, page, setPage }) {
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <StepsStyle.Container>
        <StepsStyle.ContainerForm>
          {userDataItems.map((element, item) => {
            const formDataValue = formData[Object.keys(formData)[element.value]]
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
          <FormStyle.Button
            type="button"
            onClick={() => {
              setPage(currPage => currPage + 1)
            }}
          >
            Próximo
          </FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}
