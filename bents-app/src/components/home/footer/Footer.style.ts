import { paletteColors, borderRadius } from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15em;
  @media screen and (max-width: 1700px) {
    gap: 10em;
  }
  @media screen and (max-width: 1080px) {
    gap: 5em;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

export const Logo = styled('div')`
  cursor: pointer;
  svg {
    color: ${paletteColors.primary};
    height: 5em;
    width: 10em;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const FooterItems = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
