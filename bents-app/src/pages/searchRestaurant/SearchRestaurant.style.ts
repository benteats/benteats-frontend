import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow
} from '../../styles/Root'
import { IoRestaurant } from 'react-icons/io5'
import styled from '@emotion/styled'

export const Container = styled('div')`
  display: flex;
  width: 50%;
  height: 100%;
  position: fixed;
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
