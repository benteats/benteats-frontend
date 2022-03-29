import * as FooterStyle from './Footer.style'
import * as Global from '../../../styles/Global'
import { ReactComponent as Logo } from '../../../assets/logo.svg'

export default function Footer() {
  return (
    <>
      <Global.Container id="section-footer">
        <FooterStyle.Container>
          <FooterStyle.Logo>
            <Logo />
          </FooterStyle.Logo>
          <FooterStyle.FooterItems>{`Solução`}</FooterStyle.FooterItems>
          <FooterStyle.FooterItems>{`Como Funciona`}</FooterStyle.FooterItems>
          <FooterStyle.FooterItems>{`Vantagens`}</FooterStyle.FooterItems>
          <FooterStyle.FooterItems>{`FAQ`}</FooterStyle.FooterItems>
        </FooterStyle.Container>
      </Global.Container>
    </>
  )
}
