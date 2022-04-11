import styled from "styled-components";
import { colors } from "../../theme";

export const ContainerGrande = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2012/02/22/19/28/africa-15428_960_720.jpg");
  background-size: 100% 100%;
  padding-left: 15vw;
  padding-top: 5vh;
`


export const Container = styled.div`
  display: flex;
  width: 70vw;
  height: 50vh;
  background-color: ${colors.SecondBlueForm};
  color: ${colors.Primary};
  border: 3px solid ${colors.Orange};
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
    font-size: 5rem;
    font-weight: bold;
    color: ${colors.Primary};
    padding-bottom: 30px;

  }
    `;

export const ActivitiesContainer = styled.div`
    display: flex;
    margin: auto;
`