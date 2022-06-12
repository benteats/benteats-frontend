import * as UserStyle from './UserProfile.style'
import { FilterButton } from '../../../styles/Global'
import AppSimpleNavbar from '../../../components/searchRestaurant/navBar/AppSimpleNavbar'

export default function UserProflie(){
  return(
    <>
    <AppSimpleNavbar />
    <UserStyle.Container>
      <UserStyle.ContainerPreferences>
        <UserStyle.Title>Preferências</UserStyle.Title>
        {/* <UserStyle.ProfilePhoto>
          <UserStyle.Field>Foto de Perfil</UserStyle.Field>
          <UserStyle.Value>Foto exibida no seu perifl e pública para todos os
          usuários da plataforma.</UserStyle.Value>
          <FilterButton>Alterar</FilterButton>
        </UserStyle.ProfilePhoto> */}
        <UserStyle.FormInput>
          <div>
            <UserStyle.Field>Nome</UserStyle.Field>
            <UserStyle.Value>Elias Nachle</UserStyle.Value>
          </div>
          <FilterButton>Alterar</FilterButton>
        </UserStyle.FormInput>
        <UserStyle.SaveBtn>Salvar Alterações</UserStyle.SaveBtn>
      </UserStyle.ContainerPreferences>
    </UserStyle.Container>
    </>
  )
}
