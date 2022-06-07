import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'
import styled from '@emotion/styled'

export const PhotosContent = styled('div')`
  width: 100%;
  min-height: 400px;
  height: 100%;
  display: flex;
  gap: 1em;
`

export const PrincipalPhoto = styled('div')`
  width: 100%;
  img{
    border-radius: 1.5em 0 0 1.5em;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const OtherPhotos = styled('div')`
  min-height: 400px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 20em);
  grid-gap: 1em;
  div{
    height: 100%;
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      &:nth-of-type(2){
        img{
          border-radius: 0 1em 0 0;
        }
      }
      &:nth-of-type(4){
        img{
          border-radius: 0 0 1em 0;
        }
      }
  }
`
