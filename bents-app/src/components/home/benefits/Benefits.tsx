import * as Global from '../../../styles/Global'
import * as BenefitsStyle from './Benefits.style'
import * as BenefitsMap from './BenefitsMap'
import { FaUserFriends, FaBell } from 'react-icons/fa'
import { GiProgression } from 'react-icons/gi'
import { IoPodium, IoMegaphone } from 'react-icons/io5'
import { MdOutlineWifiTethering } from 'react-icons/md'

export default function Benefits() {
    return (
        <>
            <Global.Container id='section-benefits'>
                <BenefitsStyle.Container>
                    <BenefitsStyle.Title>
                        {`Com o Bents você terá`}
                    </BenefitsStyle.Title>
                    <BenefitsStyle.DescriptionText>
                        {`Funcionalidades que irão beneficiar tanto o Cliente como
                         Empreendedores buscando a melhor
                          qualidade possível.`}
                    </BenefitsStyle.DescriptionText>

                    <BenefitsStyle.BenefitsGrid>
                    {BenefitsMap.BenefitsItems.map((element, item) => (
                      <BenefitsStyle.BenefitsItem key={item}>
                          {element.icon}
                          <h2>{element.title}</h2>
                          <p>{element.description}</p>
                      </BenefitsStyle.BenefitsItem>
                      )
                  )}
                    </BenefitsStyle.BenefitsGrid>

                </BenefitsStyle.Container>
            </Global.Container>
        </>
    )
}
