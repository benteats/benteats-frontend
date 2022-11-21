import { paletteColors, fontSize } from '../../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const NotFoundContainer = styled('div')`
  width: 100%;
  max-width: 500px;
  padding: 125px 1em 1em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  letter-spacing: 0.25px;
  svg {
    font-size: 10em;
    path {
      fill: ${paletteColors.primary};
    }
  }
  h1 {
    font-size: ${fontSize.mdSubTitle};
    color: ${paletteColors.primaryText};
  }
  p {
    font-size: ${fontSize.smText};
    color: ${paletteColors.secondaryText};
  }
`
