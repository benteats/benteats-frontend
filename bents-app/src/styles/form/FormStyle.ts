import { paletteColors, borderRadius, fontSize } from '../Root'
import styled from '@emotion/styled'

export const Input = styled('input')`
  cursor: pointer;
  outline: none;
  border-radius: ${borderRadius.globalBtn};
  font-size: ${fontSize.lgText};
  padding: 1.8em 2.5em;
  background: ${paletteColors.iptBackground};
  border: none;
  &::placeholder{ color: ${paletteColors.secondaryText}; }
`
