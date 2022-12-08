import {
    paletteColors,
    borderRadius,
    fontSize,
    lineSize,
    border
} from '../../../styles/Root'
import styled from '@emotion/styled'

export const FoodCardContainer = styled('div')`
    width: 100%;
    height: auto;
    border-radius: 1em;
    border: solid 1px ${paletteColors.grayBorder};
`

export const FoodCardContent = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const FoodCardImage = styled('div')`
    border-radius: 1em 1em 0 0;
    width: 100%;
    img {
        border-radius: 1em 1em 0 0;
        height: 300px;
        width: 100%;
    }
`

export const FoodCardData = styled('div')`
    padding: 1em;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    gap: 10px;
    span {
        p {
            text-align: justify;
            color: ${paletteColors.secondaryText}
        }

        h2 {
            color: #1CC92E
        }
    }
`

