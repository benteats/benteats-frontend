import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'
import styled from '@emotion/styled'

export const Header = styled('header')`
  height: auto;
  padding: 1em 100px;
  svg {
    cursor: pointer;
    width: 15em;
    height: 4em;
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: flex-end;
    height: auto;
    padding: 2em 1em;
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`
