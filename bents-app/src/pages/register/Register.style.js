import { paletteColors, borderRadius, fontSize } from '../../styles/Root'
import styled from '@emotion/styled'

export const Container = styled('section')`
  padding: 1em 2em;
  width: 100%;
  display: grid;
  place-content: center;
`

export const Form = styled('form')`
  width: 768px;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`

export const Span = styled('span')`
  font-size: ${fontSize.smText};
  font-weight: 600;
  color: ${paletteColors.secondaryText};
`
export const Title = styled('h1')`
  font-family: 'Inter', sans-serif;
  font-size: ${fontSize.mdSubTitle};
  font-weight: 700;
  color: ${paletteColors.primaryText};
`

export const Description = styled('span')`
  display: block;
  padding-top: 1em;
  font-size: ${fontSize.smText};
  color: ${paletteColors.secondaryText};
`

export const ProgressBar = styled('div')`
  margin: 0.75rem 0;
  height: 8px;
  width: 100%;
  background: ${paletteColors.iptBackground};
  border-radius: 5em;
`
export const ProgessBarUse = styled('div')`
  border-radius: 5em;
  height: 8px;
  background: ${paletteColors.primary};
`
