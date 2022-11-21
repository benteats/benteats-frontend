import {
  paletteColors,
  borderRadius,
  fontSize,
  shadow,
  border
} from '../../styles/Root'
import styled from '@emotion/styled'
import { RiCloseFill } from 'react-icons/ri'

export const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const Notify = styled('div')`
  z-index: 9999;
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  width: 350px;
  padding: 18px 20px 18px 10px;
  border-radius: ${borderRadius.btn};
  margin: 2.5em;
  border: 1px solid ${paletteColors.lightGrayBorder};
  ${shadow.notify}
`

export const Close = styled(RiCloseFill)`
  color: ${paletteColors.secondaryText};
  cursor: pointer;
`

export const NotifyContainer = styled('div')``

export const Header = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h1 {
    color: ${paletteColors.primaryText};
    font-size: ${fontSize.dfSubTitle};
    font-weight: 500;
  }
  p {
    font-size: ${fontSize.smSubText};
    color: ${paletteColors.secondaryText};
  }
  padding-bottom: 1em;
  ${border.dfBottom};
`

export const Steps = styled('div')`
  display: flex;
  list-style: none;
  justify-content: space-between;
  li {
    padding: 0 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    span {
      font-size: ${fontSize.smSubText};
      color: ${paletteColors.secondaryText};
    }
    svg {
      font-size: ${fontSize.lgText};
      color: ${paletteColors.spanError};
      path {
        /* fill: ${paletteColors.primary}; */
      }
    }
  }
`
