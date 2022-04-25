import { ReactComponent as NotFoundSVG } from '../../assets/not-found.svg'
import Header from '../../components/login/header/Header'
import * as NotFoundStyle from './NotFound.style'

export default function NotFound() {        
    return (
        <>
            <Header />
            <NotFoundStyle.Container>
                <NotFoundStyle.ContentNotFound>
                    <NotFoundStyle.NotFoundTitle>
                        404
                    </NotFoundStyle.NotFoundTitle>
                    <NotFoundStyle.NotFoundSubTitle>
                        Ooops!
                        Página não encontrada
                    </NotFoundStyle.NotFoundSubTitle>
                    <NotFoundStyle.NotFoundDescription>
                        <NotFoundStyle.Description>
                        Nos informe se você é um Usuário em busca de novos locais e opiniôes. Ou um empreendedor querendo melhorar através de feedbacks.
                        </NotFoundStyle.Description>
                    </NotFoundStyle.NotFoundDescription>
                </NotFoundStyle.ContentNotFound>
                <NotFoundStyle.NotFoundImage>
                    <NotFoundSVG />
                </NotFoundStyle.NotFoundImage>
            </NotFoundStyle.Container>
        </>
    )
}