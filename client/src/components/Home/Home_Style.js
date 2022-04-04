import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
    text-align: center;
    color: ${colors.PrimaryOrange};
    display: block;
    flex-flow: row wrap;
    `;

export const Filtros = styled.div`
    display: flex;
    justify-content:space-around;

    select {
    width: 17rem;
    height: 1.7rem;
    font-size: 1.2rem;
}
`

export const Cartas = styled.div`
    border: 20px solid ${colors.SecondBlue};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 15px;
    padding: 5px;

`

export const Carta = styled.div`
    border: 10px solid ${colors.SecondBlue};
    width: 500px;
    height: 420px;
    margin: 10px;
    padding: 10px;
    font-size: 1.2rem;
`