import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
    display: block;
    height: 100vh;
    background-image: url('https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg');
    background-size: 100% 100%;
    background-attachment: fixed;
`;

export const CountryContainer = styled.div`
    display: flex;
    justify-content: center ;
`

export const Filtros = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    height: 50px;
`;

export const Select = styled.select`
        width: 20rem;
        height: 3rem;
        font-size: 1.2rem;
        text-align: center;
        background-color: ${colors.PrimaryOrange}; 
        border: 3px solid ${colors.SecondBlue};
        font-weight: bold;
`

export const Cartas = styled.div`
    display: flex;  
    width: 95vw;
    flex-flow: row wrap;
    justify-content: space-around;
    text-align: center;
    margin-top: 50px;
`

export const FlechaPaginadoIzq = styled.button`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    margin-top: 11%;
    font-size: 4rem;
    width: 60px;
    height: 400px;
    color: ${colors.Primary};
    background-color: ${colors.SecondBlueCard};
`
export const FlechaPaginadoDer = styled.button`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    margin-top: 11%;
    font-size: 4rem;
    width: 60px;
    height: 400px;
    color: ${colors.Primary};
    background-color: ${colors.SecondBlueCard};
`

export const CurrentPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 50px;
    /* border-radius: 50px; */
    border: 2px solid ${colors.SecondBlue};
    background-color: ${colors.Orange};
    color: ${colors.SecondBlue};
    font-size: 2rem;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: -50px;
`

// https://s1.1zoom.me/b5946/142/Jiuzhaigou_park_China_Parks_Mountains_Autumn_Lake_532031_2560x1440.jp
