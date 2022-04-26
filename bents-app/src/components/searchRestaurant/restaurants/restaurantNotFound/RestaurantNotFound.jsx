import { ReactComponent as BentsLogo } from '../../../../assets/bents-mini.svg'
import * as RestaurantNotFoundStyle from './RestaurantNotFound.style'

export default function RestaurantNotFound() {
  return (
    <>
      <RestaurantNotFoundStyle.Container>
        <RestaurantNotFoundStyle.NotFoundContainer>
          <BentsLogo />
          <h1>Ooops! Ainda não chegamos na sua região</h1>
          <p>
            Nos informe se você é um Usuário em busca de novos locais e
            opiniôes. Ou um empreendedor querendo melhorar através de feedbacks.
          </p>
        </RestaurantNotFoundStyle.NotFoundContainer>
      </RestaurantNotFoundStyle.Container>
    </>
  )
}
