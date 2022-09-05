import { paletteColors, borderRadius, fontSize, shadow, border } from '../../styles/Root'
import styled from '@emotion/styled'

export const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const Notify = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  width: 350px;
  padding: 1.25em;
  border-radius: ${borderRadius.btn};
  ${border.df};
  margin: 2.5em;
  ${shadow.notify}
`

export const NotifyContainer = styled('div')``

export const Header = styled('div')`
  display: flex;
  flex-direction: column;
  gap: .25rem;
  h1{
    color: ${paletteColors.primaryText};
    font-size: ${fontSize.dfSubTitle};
    font-weight: 500;
  }
  p{
    font-size: ${fontSize.smSubText};
    color: ${paletteColors.secondaryText}
  }
  padding-bottom: 1em;
  ${border.dfBottom};
`

export const Steps = styled('div')`
  display: flex;
  padding-top: 1.25em;
  list-style: none;
  li{
    padding: 0 .75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    span{
      font-size: ${fontSize.smText};
      color: ${paletteColors.secondaryText};
    }
    svg{
      font-size: ${fontSize.lgText};
      color: ${paletteColors.spanError};
      path{
        /* fill: ${paletteColors.primary}; */
      }
    }
  }
`
