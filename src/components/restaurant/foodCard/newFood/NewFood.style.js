import {
  paletteColors,
  borderRadius,
  fontSize,
  border
} from '../../../../styles/Root'
import styled from '@emotion/styled'

export const Overlay = styled('div')`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  display: none;
  &.isClicked {
    place-items: center;
    display: grid;
  }
`
export const Modal = styled('div')`
  background: ${paletteColors.white};
  border-radius: ${borderRadius.globalBtn};
  border: 1px solid #eaf0f7;
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
  padding: 0.5em 0 1em 0;
  gap: 0.5rem;
  label {
    color: ${paletteColors.secondaryText};
    font-size: ${fontSize.smText};
  }
  input {
    border: 1px solid ${paletteColors.grayBorder};
    border-radius: ${borderRadius.btn};
    height: 50px;
    padding: 1em;
    outline: none;
  }
`
export const Field = styled('h2')`
  font-size: ${fontSize.lgText};
  font-weight: 400;
`

export const Value = styled('span')`
  font-size: ${fontSize.smText};
  color: ${paletteColors.secondaryText};
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
  gap: 0.5rem;
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

export const ContainerUpload = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`
