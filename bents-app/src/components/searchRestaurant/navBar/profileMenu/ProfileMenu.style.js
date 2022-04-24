import { paletteColors, borderRadius, fontSize } from '../../../../styles/Root'
import styled from '@emotion/styled'

export const MenuWrapper = styled('div')`
  background: ${paletteColors.white};
  position: absolute;
  width: auto;
  border-radius: ${borderRadius.btn};
  top: 70px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  gap: 1.5em 0;
  border: 1px solid ${paletteColors.lightGrayBorder};
  ul {
    li {
      padding: 0.85em 2em;
      list-style: none;
      a {
        transition: all ease-in 100ms;
        font-size: ${fontSize.smSubText};
        &:hover {
          opacity: 0.65;
        }
      }
    }
  }
`
