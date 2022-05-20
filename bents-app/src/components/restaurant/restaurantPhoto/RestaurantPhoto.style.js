import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'
import styled from '@emotion/styled'

export const PhotosContent = styled('div')`
  width: 100%;
  height: 50vh;
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 1em;
  background: red;
`

export const PrincipalPhoto = styled('div')`
  height: 100%;
  width: 100%;
  img{
    height: 50vh;
    width: 100%;
    object-fit: cover;
  }
`

export const OtherPhotos = styled('div')`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas: 'a a' 'a a';
  gap: 1em;
  div{
    height: calc(25vh - 1em);
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`
