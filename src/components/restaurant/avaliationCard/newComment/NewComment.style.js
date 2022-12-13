import styled from '@emotion/styled'
import { fontSize, paletteColors, shadow } from '../../../../styles/Root'
import { FaStar } from 'react-icons/fa'

export const Container = styled('div')`
  display: flex;
  padding: 2em 0em 0 0;
  gap: 0.75em;
  svg {
    height: 1.5em;
    width: 1.5em;
  }
  button {
    height: 2.25em;
    width: 2.25em;
    background: ${paletteColors.primary};
    border: none;
    color: ${paletteColors.white};
    border-radius: 5px;
    display: grid;
    place-items: center;
    svg {
      height: 1.25em;
      width: 1.25em;
    }
    cursor: pointer;
    &.sentAvaliation {
      background: ${paletteColors.gray};
      cursor: auto;
    }
  }
  textarea {
    overflow: hidden;
    border: none;
    resize: none;
    width: 400px;
    outline: none;
    padding: 6px 10px 6px 10px;
    border: 1.35px solid ${paletteColors.white};
    border-radius: 3px 7px 7px 7px;
    color: ${paletteColors.black};
    font-size: ${fontSize.smText};
    transition: all ease-in-out 150ms;
    letter-spacing: 0.5px;
    line-height: 1.35em;
    &:focus {
      width: 600px;
      border: 1.35px solid ${paletteColors.primary};
    }
    ::placeholder {
      letter-spacing: 0px;
      color: ${paletteColors.secondaryText};
    }
  }
`

export const RateBtn = styled('a')`
  border: none;
  color: ${paletteColors.orange};
  border-radius: 5px;
  display: grid;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3px;
  svg {
    height: 1.25em;
    width: 1.25em;
  }
  cursor: pointer;
`
export const SelectRate = styled('div')`
  background: ${paletteColors.white};
  z-index: 9999;
  position: absolute;
  width: 200px;
  margin-top: calc(1.25em + 0.5em);
  margin-left: -5em;
  border-radius: 5px;
  padding: 10px;
  display: none;
  div {
    display: flex;
    gap: 0.5rem;
  }
  h1 {
    font-size: ${fontSize.mdText};
    font-weight: 600;
    color: ${paletteColors.secondaryText};
  }
  &.opened {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &.clickedStart {
    color: ${paletteColors.orange};
  }
  ${shadow.notify}
`

export const Star = styled(FaStar)`
  color: ${paletteColors.gray};
  cursor: pointer;
  &.clicked {
    color: ${paletteColors.orange};
  }
`
