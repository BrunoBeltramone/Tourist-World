import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
    display: block;
    color: ${colors.PrimaryOrange};
    flex-flow: row wrap;
    background-image: url('https://p4.wallpaperbetter.com/wallpaper/993/439/626/the-sky-clouds-flight-nature-wallpaper-preview.jpg');
    background-size: contain;
`;

export const CountryContainer = styled.div`
    display: flex;
    justify-content: center ;
`

export const Filtros = styled.div`
    display: flex;
    justify-content:space-around;
    height: 85px;
    
    select {
        margin-top: 10px;
        margin-bottom: -20px;
        width: 20rem;
        height: 3rem;
        font-size: 1.2rem;
}
`

export const Cartas = styled.div`
    display: flex;  
    width: 80vw;
    flex-flow: row wrap;
    justify-content: space-around;
    text-align: center;
    margin: 15px;
    padding: 5px;
`

