import styled from "styled-components";
import { colors } from "../../../theme";

export const Container = styled.div`
    display: flex;
    width: 20rem;
    height: 3rem;
`

export const Input = styled.input`
    width: 14rem;
    height: 3rem;
    font-size: 1.3rem;
    text-align: center;
    width: 20rem;
    height: 3rem;
    color: black;
    background-color: ${colors.PrimaryOrange}; 
    border: 2.5px solid ${colors.SecondBlue};
    /* border-top-left-radius: 30px;
    border-bottom-left-radius: 30px; */
    font-weight: bold;

    &::placeholder {
        color: black;
    }
`

export const Boton = styled.button`
    width: 6rem;
    height: 3rem;
    background-color: ${colors.SecondBlue};
    color: ${colors.Primary};
    border: 2.5px solid ${colors.SecondBlue};
    font-size: 1.2rem;
    /* border-top-right-radius: 20px;
    border-bottom-right-radius: 20px; */
    padding: 10px;
    cursor: pointer;
`