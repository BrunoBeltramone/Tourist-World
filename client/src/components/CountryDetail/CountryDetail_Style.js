import styled from "styled-components";
import { colors } from "../../theme";

export const ContainerGrande = styled.div`
  width: 100vw;
  height: 95vh;
  background-image: url("https://i.pinimg.com/originals/07/e1/05/07e1059911d72005a91f49bebedcd243.jpg");
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
  color: ${colors.PrimaryOrange};
  border: 5px solid ${colors.PrimaryOrange};
  border-radius: 30px;
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
    border-radius: 30px;

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
    color: ${colors.PrimaryOrange};
  }
    `;
