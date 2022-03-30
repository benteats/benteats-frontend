import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  padding-top: 2em;
  display: grid;
  gap: 1.75em;
`

export const Content = styled('div')``

export const ContainerButton = styled('div')`
  display: flex;
  padding-top: 1.5em;
`

export const Checkbox = styled('div')`
  display: grid;
  grid-template-columns: 75px auto;
  align-items: center;
  gap: 2em;
  padding: 1em 2em;
  cursor: pointer;
  height: 140px;
  background: ${paletteColors.iptBackground};
  border-radius: 35px;
  svg {
    height: 75px;
    width: 75px;
    padding: ${borderRadius.btn};
    font-size: 70px;
    border-radius: ${borderRadius.checkboxIcon};
    background: ${paletteColors.white};
    color: ${paletteColors.primary};
  }
  h2 {
    padding-bottom: 0.25rem;
    font-weight: 600;
    font-size: 1.5em;
  }
  span {
    color: ${paletteColors.secondaryText};
    font-size: ${fontSize.mdText};
  }
`

export const ContainerForm = styled('div')`
  display: grid;
  grid-template-areas: 'a a';
  gap: 2.5em 4em;
`

export const ContainerInput = styled('div')`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
