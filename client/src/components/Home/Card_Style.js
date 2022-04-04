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
        align-self: fle;
    }
`