import {
  paletteColors,
  borderRadius,
  fontSize,
  border
} from '../../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('div')`
  padding: calc(70px + 1em) 1em 1em 1em;
  width: 100%;
  display: grid;
  place-items: center;
`

export const ContainerPreferences = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`
export const Title = styled('h1')`
  padding-bottom: 1em;
  font-size: ${fontSize.mdSubTitle};
  font-weight: 600;
`
export const ProfilePhoto = styled('div')``

export const FormInput = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  ${border.dfTop};
  ${border.dfBottom};
`

export const Field = styled('h2')`
  font-size: ${fontSize.lgText};
  font-weight: 400;
`

export const Value = styled('span')`
  font-size: ${fontSize.smText};
  color: ${paletteColors.secondaryText};
`

export const SaveBtn = styled('button')`
  margin-top: 2em;
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
