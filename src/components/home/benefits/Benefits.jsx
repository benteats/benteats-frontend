import * as Global from '../../../styles/Global'
import * as BenefitsStyle from './Benefits.style'
import { benefitsItems } from './BenefitsMap'

export default function benefits() {
  return (
    <>
      <Global.Container id="section-benefits">
        <BenefitsStyle.Container>
          <BenefitsStyle.Title>{`Com o Bents você terá`}</BenefitsStyle.Title>
          <BenefitsStyle.DescriptionText>
            {`Funcionalidades que irão beneficiar tanto o Cliente como
                         Empreendedores buscando a melhor
                          qualidade possível.`}
          </BenefitsStyle.DescriptionText>

          <BenefitsStyle.BenefitsGrid>
            {benefitsItems.map((element, item) => (
              <BenefitsStyle.BenefitsItem key={item}>
                {element.icon}
                <h2>{element.title}</h2>
                <p>{element.description}</p>
              </BenefitsStyle.BenefitsItem>
            ))}
          </BenefitsStyle.BenefitsGrid>
        </BenefitsStyle.Container>
      </Global.Container>
    </>
  )
}
