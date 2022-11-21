import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow
} from '../../styles/Root'
import { IoRestaurant } from 'react-icons/io5'
import styled from '@emotion/styled'

export const Container = styled('div')`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100vh;
  position: fixed;
  @media screen and (max-width: 1678px) {
    grid-template-columns: 35% 65%;
  }
  @media screen and (max-width: 1366px) {
    grid-template-columns: 30% 70%;
  }
  @media screen and (max-width: 1160px) {
    grid-template-columns: 0% 100%;
  }
`

export const Pin = styled(IoRestaurant)`
  cursor: pointer;
  background: ${paletteColors.white};
  color: ${paletteColors.primary};
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
`
