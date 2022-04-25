import { useEffect, useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { userTypeItems } from './StepsMap'

export default function UserType({
  checkboxItems,
  setCheckboxItems,
  formData,
  setFormData,
  setPage,
  userType,
  setUserType
}) {
  const [error, setError] = useState('')

  const onInputChange = e => {
    const itemTarget = e.target.name
    const isChecked = e.target.checked
    const updatedSubjects = checkboxItems.map((subject, item) => {
      if (userTypeItems[item].name === itemTarget) {
        return {
          ...subject,
          checked: isChecked
        }
      } else {
        return {
          ...subject,
          checked: false
        }
      }
    })
    setCheckboxItems(updatedSubjects)
  }

  useEffect(() => {
    setUserType(
      checkboxItems.reduce((acc, cur) => {
        if (cur.checked == true) {
          acc = cur.name
        }
        return acc
      }, {})
    )
  }, [checkboxItems])

  const validateFormStep = () => {
    if (Object.keys(userType).length === 0) {
      return setError('Escolha um tipo de usuário para continuar')
    }
    setPage(currPage => currPage + 1)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <StepsStyle.Container>
        {userTypeItems.map((element, item) => {
          return (
            <label key={item}>
              <StepsStyle.Input
                type="checkbox"
                name={element.name}
                value={checkboxItems[item].name}
                onChange={onInputChange}
                checked={checkboxItems[item].checked}
              />
              <StepsStyle.Checkbox>
                {element.icon}
                <StepsStyle.Content>
                  <h2>{element.title}</h2>
                  <span>{element.description}</span>
                </StepsStyle.Content>
              </StepsStyle.Checkbox>
            </label>
          )
        })}
        {error !== '' ? (
          <FormStyle.ErrorMessage>{error}</FormStyle.ErrorMessage>
        ) : (
          ''
        )}
        <StepsStyle.ContainerButton>
          <FormStyle.Button type="button" onClick={validateFormStep}>
            Próximo
          </FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}
