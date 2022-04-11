import styled from "styled-components"
import { colors } from "../../../theme"


export const MainContainer = styled.div`
    position: relative;
    display: flex;
    margin: 10px;
    width: 430px;
    height: 450px;
    margin-top: 20px;
    color: ${colors.Primary};
`

export const TheActivity = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in;

    &:hover{
        transform: rotateY(180deg);
    }
`


export const TheFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: ${colors.SecondBlueCard};
    color: ${colors.White};
    text-align: left;
    justify-content: center;
    font-size: 1.5rem;
    padding: 14px;
`

export const TheBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: ${colors.SecondBlueCard};
    font-size: 1.5rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    color: ${colors.Primary};
    align-content: space-between;
    padding: 14px;

`
     export const Title = styled.h2`
         display: flex;
         width: 100%;
         margin-bottom: 15px;
         padding-bottom: 15px;
         color: ${colors.Orange};
         justify-content: flex-start;
         border-bottom: 2px solid white;
`

export const Texto = styled.p`
     color: ${colors.White};
     text-align: left;
     justify-content: center;
     font-size: 1.5rem;
     padding: 14px;
 `