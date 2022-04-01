import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { userTypeItems } from './StepsMap'

export default function UserType({ page, setPage }) {
  return (
    <>
      <StepsStyle.Container>
        {userTypeItems.map((element, item) => (
          <StepsStyle.Checkbox key={item}>
            {element.icon}
            <StepsStyle.Content>
              <h2>{element.title}</h2>
              <span>{element.description}</span>
            </StepsStyle.Content>
          </StepsStyle.Checkbox>
        ))}
        <StepsStyle.ContainerButton>
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
