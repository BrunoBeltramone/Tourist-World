import styled from 'styled-components'
import { colors } from '../../theme';

export const Container = styled.div`
width: 100vw;
height: 100vh;
text-align: center;
background-image: url('https://s1.1zoom.me/b5050/416/Jiuzhaigou_park_China_511221_3840x2400.jpg');
background-size: 100% 100%;
`;


export const Formulario = styled.form`
padding: 100px;
width: 40vw;
height: 70vh;
margin-left: 30%;
background-color:  ${colors.SecondBlueForm};
color:white;
text-align: center;
font-size: 2rem;
font-family: sans-serif;
border-radius: 30px;
text-shadow: 6px 6px 6px black;

    h1 {
        color: ${colors.PrimaryOrange};
    }

    button {
        width: 6rem;
        height: 2.5rem;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
        color: ${colors.SecondBlue};
        background-color: ${colors.PrimaryOrange};
        font-size: 1.2rem;
        transition: 0.5s all ease;

        }
    }
`;

export const Label = styled.label`
    
`

export const Input = styled.input`
        width: 18rem;
        height: 2.5rem;
        font-size: 1.2rem;
        /* border-radius: 30px; */
        color: ${colors.SecondBlue};
        background-color: ${colors.PrimaryOrange}; 
        border: 3px solid ${colors.SecondBlue};
        font-weight: bold;
        text-align: center;
        margin-bottom: 25px;
        
        `

export const Select = styled.select`
        width: 18rem;
        height: 2.5rem;
        font-size: 1.2rem;
        /* border-radius: 30px; */
        color: ${colors.SecondBlue};
        /* -webkit-text-stroke: 0.5px ; */
        background-color: ${colors.PrimaryOrange}; 
        border: 3px solid ${colors.SecondBlue};
        font-weight: bold;
        margin-bottom: 25px;
        
        option {
            background-color: white;
        }
`