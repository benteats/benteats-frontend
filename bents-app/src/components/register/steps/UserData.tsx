import * as FormStyle from '../../../styles/form/FormStyle'
import * as StepsStyle from './Steps.style'

export default function UserData({
  page,
  setPage
}: {
  page: any
  setPage: any
}) {
  return (
    <>
      <StepsStyle.Container>
        <StepsStyle.ContainerButton>
          <FormStyle.PrevButton
            type="button"
            onClick={() => {
              setPage((currPage: number) => currPage - 1)
            }}
          >
            Anterior
          </FormStyle.PrevButton>
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
