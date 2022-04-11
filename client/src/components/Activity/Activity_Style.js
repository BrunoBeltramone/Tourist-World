import styled from 'styled-components'
import { colors } from '../../theme';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
text-align: center;
background-image: url('https://s1.1zoom.me/b5050/416/Jiuzhaigou_park_China_511221_3840x2400.jpg');
background-size: 100% 100%;

`;


export const Formulario = styled.form`
display: flex;
/* padding: 100px; */
width: 40vw;
height: 80vh;
/* justify-items: center; */
background-color:  ${colors.SecondBlueForm};
color:white;
/* text-align: center; */
font-size: 2rem;
flex-direction:column;
font-family: sans-serif;
/* border-radius: 30px; */
text-shadow: 6px 6px 6px black;

    h1 {
        color: ${colors.Primary};
    }

    button{
        margin: auto;
        width: 12rem;
        height: 3rem;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
        color: ${colors.SecondBlue};
        background-color: ${colors.Primary};
        font-size: 1.2rem;
        transition: 0.5s all ease;

        }
    }
`;

export const Label = styled.label`
    
`

export const Input = styled.input`
        width: 25rem;
        height: 3rem;
        margin: auto;
        font-size: 1.3rem;
        color: ${colors.SecondBlue};
        background-color: ${colors.Primary}; 
        border: 3px solid ${colors.SecondBlue};
        font-weight: bold;
        text-align: center;        
        `

export const Select = styled.select`
        width: 25rem;
        height: 3rem;
        margin: auto;
        font-size: 1.3rem;
        color: ${colors.SecondBlue};
        text-align: center;
        -webkit-text-stroke: 0.3px ;
        background-color: ${colors.Primary}; 
        border: 3px solid ${colors.SecondBlue};
        font-weight: bold;
        
        option {
            background-color: white;
        }
`

export const Ul = styled.ul`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    justify-content: center;
    margin-top: 15px;

    li{
        padding: 10px;
        margin: 3px;
        display: flex;
        background-color: ${colors.SecondBlue};

        /* flex-flow: row wrap; */
    }

    button{
        /* display: flex; */
        margin: 6px;
        margin-left: 15px;
        background-color: ${colors.Orange};
        border-radius: 30px;
        width: 30px;
        height: 30px;
    }
`