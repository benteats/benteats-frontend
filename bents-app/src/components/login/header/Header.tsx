import { ReactComponent as Logo } from '../../../assets/logo.svg'
import * as HeaderStyle from './HeaderStyle'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  let navigate = useNavigate()
  return (
    <>
      <HeaderStyle.Header>
        <Logo
          onClick={() => {
            navigate('/')
          }}
        />
      </HeaderStyle.Header>
    </>
  )
}
