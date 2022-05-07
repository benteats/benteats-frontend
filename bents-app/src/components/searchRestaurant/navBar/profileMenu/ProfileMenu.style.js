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

export const MenuWrapperMobile = styled('div')`
  bottom: 0;
  z-index: 99;
  position: absolute;
  background: ${paletteColors.black};
  width: 100%;
  border-radius: 1em 1em 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  gap: 1.5em 0;
  /* border: 1px solid ${paletteColors.lightGrayBorder}; */
  ul {
    li {
      padding: 1em 2em;
      list-style: none;
      a {
        cursor: pointer;
        transition: all ease-in 100ms;
        font-size: ${fontSize.mdText};
        color: ${paletteColors.white};
        &:hover {
          opacity: 0.65;
        }
      }
    }
  }
`
