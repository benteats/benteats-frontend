import styled from '@emotion/styled'
import { fontSize, paletteColors } from '../../../styles/Root' 

export const AvaliationCardContainer = styled('div')`
    width: 100%;
    height: auto;
`

export const AvaliationCardContent = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const AvaliationCardImage = styled('figure')`
    width: 60px;
    border-radius: 25%;
    margin-right: 20px;
    img{
        border-radius: 50%;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

export const AvaliationCardRating = styled('div')`
    display: flex;
    svg{
        font-size: ${fontSize.dfSubTitle};
        color: ${paletteColors.orange};
        margin-right: .25rem;
    }
`

export const AvaliationCardHeader = styled('div')`
    display: flex;
`

export const AvaliationCardData = styled('div')`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    h2{
        color: ${paletteColors.primaryText};
    }
    p{
        color: ${paletteColors.secondaryText};
        font-size: ${fontSize.smText};
    }
`

export const AvaliationCardMessage = styled('div')`
    margin-top: 10px;
    p{
        color: ${paletteColors.secondaryText};
        font-size: ${fontSize.smText};
        text-align: justify;
    }
`