import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../theme"

export const MainContainer = styled.div`
    position: relative;
    width: 420px;
    height: 370px;
    margin: 20px;
    margin-bottom: 80px;
`

export const TheCard = styled.div`
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
    font-size: 1.4rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding: 10px;
    color: ${colors.Primary};
    text-shadow: 4px 4px 4px black;

    img {
        width: 100%;
        height: 260px;
    }
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

    p{
        text-shadow: 4px 4px 4px black;
    }

    h2{
        padding-top: 10px;
        text-shadow: 4px 4px 4px black;
    }
`
export const Texto = styled.p`
    color: ${colors.White};
    text-align: left;
    margin-bottom: 20px;
    padding-left: 30px;
    font-size: 1.7rem;
`

export const Detail = styled(NavLink)`
    display: flex;
    text-decoration: none;    
    background-color: ${colors.Primary};
    color: ${colors.SecondBlue};
    width: 185px;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 20px;
    justify-content: center;
    margin-left: 120px;
    padding: 7px;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: ${colors.Primary};
        background-color: ${colors.Orange};
        font-size: 1.3rem;
        transition: 0.5s all ease;
        text-shadow: 0px 0px 5px black;
    }
`