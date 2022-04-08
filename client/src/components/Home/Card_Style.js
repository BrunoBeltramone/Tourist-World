import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../theme"

export const Carta = styled.div`
    border-radius: 20px;
    border: 3px solid ${colors.SecondBlueCard};
    display: flex;
    flex-direction: column;
    width: 550px;
    height: 470px;
    margin: 25px;
    padding: 5px;
    font-size: 1.7rem;
    justify-content: space-between;
    color: ${colors.White};
    background-color: ${colors.SecondBlueCard};
    font-weight: bold;

    img {
        width: 100%;
        height: 350px;
        border-radius: 20px;
    }

    h2 {
        align-self: flex;
    }
`
//----------------------------------------------------------------------

export const MainContainer = styled.div`
    position: relative;
    width: 560px;
    height: 510px;
    margin: 50px;

    /* background-color: ${colors.SecondBlueCard}; */
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
    font-size: 2rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding: 10px;
    border-radius: 20px;
    color: ${colors.PrimaryOrange};
    text-shadow: 3px 3px 3px black;
    -webkit-text-stroke: 0.5px ${colors.SecondBlue};




    img {
        width: 100%;
        height: 350px;
        border-radius: 20px;
    }
`

export const TheBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: ${colors.SecondBlueCard};
    font-size: 1.9rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    padding: 10px;
    border-radius: 20px;
    color: ${colors.PrimaryOrange};

    p{
        text-shadow: 2px 2px 2px black;
    }


    h2{
        text-shadow: 3px 3px 3px black;
        -webkit-text-stroke: 0.5px ${colors.SecondBlue};
    }

`

export const Texto = styled.p`
    color: ${colors.White};
    text-align: left;
    padding-left: 70px;
    font-size: 2rem;
    margin: 10px;
`

export const Boton = styled.button`
    background-color: ${colors.SecondBlue};
    color: ${colors.PrimaryOrange};
    width: 13rem;
    height: 2.2rem;
    font-size: 1.2rem;
    border-radius: 20px;
    font-weight: bold;

    &:hover{
        color: ${colors.SecondBlue};
        background-color: ${colors.PrimaryOrange};
        font-size: 1.3rem;
        transition: 0.5s all ease;
        font-weight: bold;
    }
`

export const Detail = styled(NavLink)`
    text-decoration: none;
    border-radius: 20px;
    
    background-color: ${colors.SecondBlue};
    color: ${colors.PrimaryOrange};
    font-family: sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 12px;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: ${colors.SecondBlue};
        background-color: ${colors.PrimaryOrange};
        font-size: 1.4rem;
        transition: 0.5s all ease;
    }
`