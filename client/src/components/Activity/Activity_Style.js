import styled from 'styled-components'
import { colors } from '../../theme';

export const Container = styled.div`
width: 100vw;
height: 100vh;
text-align: center;
background-image: url('https://cdn.pixabay.com/photo/2018/08/01/21/26/map-3578213_960_720.jpg');
background-size: cover;
`;


export const Formulario = styled.form`
padding: 100px;
width: 40vw;
height: 60vh;
margin-left: 30%;
background-color:  ${colors.PrimaryOrangeDIF};
color:white;
text-align: center;
font-size: 2rem;
font-family: sans-serif;
border-radius: 30px;


    h1 {
        color: ${colors.PrimaryOrange};
    }

    button {
        width: 6rem;
        height: 2.5rem;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 10px;


        &:hover{
        color: ${colors.SecondBlue};
        background-color: ${colors.PrimaryOrange};
        font-size: 1.2rem;
        transition: 0.5s all ease;
        }
    }

    select {
        width: 17rem;
        height: 1.7rem;
        font-size: 1.2rem;
    }

    input {
        width: 17rem;
        height: 1.7rem;
        font-size: 1.2rem;
    }
`;
