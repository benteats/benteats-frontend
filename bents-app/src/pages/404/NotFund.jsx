import Header from '../../components/login/header/Header'
import * as NotFundStyle from './NotFund.style'

export default function NotFund() {
    
    
    return (
        <>
            <Header />
            <NotFundStyle.Container>
                <NotFundStyle.ContentNotFund>
                    <NotFundStyle.NotFundTitle>
                        404
                    </NotFundStyle.NotFundTitle>
                    <NotFundStyle.NotFundSubTitle>
                        Ooops!
                        Página não encontrada
                    </NotFundStyle.NotFundSubTitle>
                    <NotFundStyle.NotFundDescription>
                        <NotFundStyle.Description>
                        Nos informe se você é um Usuário em busca de novos locais e opiniôes. Ou um empreendedor querendo melhorar através de feedbacks.
                        </NotFundStyle.Description>
                    </NotFundStyle.NotFundDescription>
                </NotFundStyle.ContentNotFund>
                <NotFundStyle.NotFundImage></NotFundStyle.NotFundImage>
            </NotFundStyle.Container>
        </>
    )
}