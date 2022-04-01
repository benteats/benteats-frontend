import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'

export default function UserAddress({ page, setPage }) {
  return (
    <>
      <StepsStyle.Container>
        <StepsStyle.ContainerForm>
          <StepsStyle.ContainerInput>
            <FormStyle.Label>CEP</FormStyle.Label>
            <FormStyle.Input placeholder="Digite seu CEP" maxLength={35} />
          </StepsStyle.ContainerInput>
          <StepsStyle.ContainerInput>
            <FormStyle.Label>Estado</FormStyle.Label>
            <FormStyle.Input
              placeholder="Escolha o UF de seu estado"
              maxLength={35}
            />
          </StepsStyle.ContainerInput>
        </StepsStyle.ContainerForm>
        <FormStyle.Label>Endereço</FormStyle.Label>
        <FormStyle.Input
          placeholder="Rua Fulano da Silva, 123"
          maxLength={35}
        />
        <StepsStyle.ContainerButton>
          <FormStyle.PrevButton
            type="button"
            onClick={() => {
              setPage(currPage => currPage - 1)
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
