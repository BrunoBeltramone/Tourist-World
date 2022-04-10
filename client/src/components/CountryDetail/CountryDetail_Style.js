import styled from "styled-components";
import { colors } from "../../theme";

export const ContainerGrande = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://d2r9epyceweg5n.cloudfront.net/stores/001/135/090/products/125x89-mapa-1-sepia1-a3ba610dc361b57e7515886475452588-1024-1024.jpg");
  background-size: 100% 100%;
  padding-left: 15vw;
  padding-top: 5vh;
`


export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  /* text-align: center; */
  width: 70vw;
  height: 50vh;
  /* text-align: center; */
  background-color: ${colors.SecondBlueForm};
  color: ${colors.Primary};
  border: 5px solid ${colors.Orange};
  /* border-radius: 30px; */
`;

export const Img = styled.div`
  width: 35vw;
  height: 43vh;
  display: flex;
  justify-content: flex-start;
  align-self: center;


  img {
    /* position: static; */
    padding: 10px;
    width: 100%;
    height: 100%;
    /* border-radius: 30px; */

  }
`;

export const Informacion = styled.div`
  width: 35vw;
  height: 43vh;
  display: flex;
  flex-direction: column;
  color: ${colors.White};
  font-size: 3rem;
  align-self: center;
`;

export const Texto = styled.p`
  display: flex;
  text-align: left;
  height: 43vh;
  text-shadow: 3px 3px 3px black;
  padding-left: 50px;

  &:nth-child(1) {
    font-size: 4rem;
    font-weight: bold;
    color: ${colors.Primary};
  }
    `;
