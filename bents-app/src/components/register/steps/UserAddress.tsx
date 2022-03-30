import * as FormStyle from '../../../styles/form/FormStyle'
import * as StepsStyle from './Steps.style'

export default function UserAddress({
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
          <FormStyle.Button type="button">Concluir</FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}
