import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
    display: block;
    height: 180rem;
    flex-flow: row wrap;
    background-image: url('https://s1.1zoom.me/big0/928/USA_Parks_Arches_National_Park_Crag_Clouds_Canyon_610577_1280x739.jpg');
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
        border-radius: 30px;
        background-color: ${colors.PrimaryOrange}; 
        border: 3px solid ${colors.SecondBlue};
        font-weight: bold;
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

// https://s1.1zoom.me/b5946/142/Jiuzhaigou_park_China_Parks_Mountains_Autumn_Lake_532031_2560x1440.jp
