import * as FormStyle from '../../../styles/form/Form.style'
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
        <FormStyle.Label>Nome</FormStyle.Label>
        <FormStyle.Input placeholder="Seu nome" maxLength={35} />
        <FormStyle.Label>Nome</FormStyle.Label>
        <FormStyle.Input placeholder="email@dominio.com" maxLength={35} />
        <FormStyle.Label>Nome</FormStyle.Label>
        <FormStyle.Input placeholder="(11) 1234-5678" maxLength={35} />
        <FormStyle.Label>Nome</FormStyle.Label>
        <FormStyle.Input placeholder="Escolha uma senha forte" maxLength={35} />
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
