import { paletteColors, borderRadius, fontSize } from '../../../styles/Root'
import styled from '@emotion/styled'

export const PhotosContent = styled('div')`
  max-width: 1680px;
  width: 100%;
  height: 50vh;
  display: flex;
  gap: 1em;
  @media screen and (max-width: 1080px){
    grid-template-columns: 45% 55%;
  }
`

export const PrincipalPhoto = styled('div')`
  height: 100%;
  width: 100%;
  img{
    border-radius: 1.5em 0 0 1.5em;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const OtherPhotos = styled('div')`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  div{
    display: grid;
    grid-gap: 1em;
    height: 100%;
    &:nth-of-type(2){
      div:nth-of-type(1){
        img{
          border-radius: 0 1em 0 0;
        }
      }
      div:nth-of-type(2){
        img{
          border-radius: 0 0 1em 0;
        }
      }
    }
    div{
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`
