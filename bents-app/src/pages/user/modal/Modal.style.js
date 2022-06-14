import {
  paletteColors,
  borderRadius,
  fontSize,
  border
} from '../../../styles/Root'
import styled from '@emotion/styled'

export const Overlay = styled('div')`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  display: grid;
  place-items: center;
`
export const Modal = styled('div')`
  background: ${paletteColors.white};
  border-radius: ${borderRadius.globalBtn};
  border: 1px solid #EAF0F7;
  max-width: 500px;
  width: 100%;
  box-shadow: 6px 4px 17px rgba(196, 196, 196, 0.23);
`

export const ModalContainer = styled('div')`
  padding: 1.75em;
`

export const Title = styled('div')``

export const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1.5em 0 1em 0;
  gap: .5rem;
  label{
    color: ${paletteColors.secondaryText};
    font-size: ${fontSize.smText};
  }
  input{
    border: 1px solid ${paletteColors.grayBorder};
    border-radius: ${borderRadius.btn};
    height: 50px;
    padding: 1em;
    outline: none;
  }
`

export const CancelBtn = styled('button')`
  background: ${paletteColors.white};
  transition: ease all 100ms;
  font-size: ${fontSize.smSubText};
  font-weight: 400;
  border-radius: ${borderRadius.checkboxIcon};
  border: none;
  outline: none;
  cursor: pointer;
  color: ${paletteColors.black};
  margin-right: 2em;
  &:hover {
    opacity: 0.85;
  }
`

export const SaveBtn = styled('button')`
  transition: ease all 100ms;
  font-size: ${fontSize.smSubText};
  font-weight: 400;
  background: ${paletteColors.primary};
  border-radius: ${borderRadius.checkboxIcon};
  border: none;
  outline: none;
  cursor: pointer;
  color: ${paletteColors.white};
  width: fit-content;
  padding: 12px 15px;
  &:hover {
    opacity: 0.85;
  }
`

export const ButtonContainer = styled('div')`
  display: flex;
  align-items: center;
`

export const ErrorMessage = styled('div')`
  margin-left: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.smText};
  font-weight: 500;
  color: ${paletteColors.spanError};
  gap: .5rem;
`
