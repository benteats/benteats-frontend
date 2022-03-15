import * as FooterStyle from '../../../styles/footer/FooterStyle'
import * as Global from '../../../styles/Global'
import { ReactComponent as Logo } from '../../../assets/logo.svg'

export default function footer() {
    return (
        <>
            <Global.Container>
                <FooterStyle.Container>
                    <FooterStyle.Logo>
                        <Logo />
                    </FooterStyle.Logo>
                    <FooterStyle.FooterItems>
                        {`Solução`}
                    </FooterStyle.FooterItems>
                    <FooterStyle.FooterItems>
                        {`Como Funciona`}
                    </FooterStyle.FooterItems>
                    <FooterStyle.FooterItems>
                        {`Vantagens`}
                    </FooterStyle.FooterItems>
                    <FooterStyle.FooterItems>
                        {`FAQ`}
                    </FooterStyle.FooterItems>
                </FooterStyle.Container>
            </Global.Container>    
        </>
    )
}