import * as FormStyle from '../../../styles/form/FormStyle'
import * as StepsStyle from './Steps.style'
import { userType } from './StepsMap'

export default function UserType({
  page,
  setPage
}: {
  page: any
  setPage: any
}) {
  return (
    <>
      <StepsStyle.Container>
        {userType.map((element, item) => (
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
              setPage((currPage: number) => currPage + 1)
            }}
          >
            Próximo
          </FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}
