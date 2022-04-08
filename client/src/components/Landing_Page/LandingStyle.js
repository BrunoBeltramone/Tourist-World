import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;

  animation: Banner 10s infinite;
  animation-direction: alternate;
  
  @keyframes Banner {
        0%, 25% {
            background-image: url("https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg");
            opacity: 1;
        };
        
        35%, 65%{
            background-image: url("https://www.xtrafondos.com/descargar.php?id=3931&resolucion=3840x2160");
            opacity: 1;
        }
        
        75%, 100%{
          background-image: url("https://i.pinimg.com/originals/07/e1/05/07e1059911d72005a91f49bebedcd243.jpg");
          opacity: 1;
      }
  }
`;

export const Link = styled(NavLink)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    /* color: ${colors.PrimaryOrange}; */
    color: ${colors.SecondBlue};
    width: 250px;
    height: 70px;
    font-size: 2.5rem;
    font-weight: bold;
    align-items: center;
    /* background-color: ${colors.SecondBlueForm}; */
    border-radius: 30px;
    background-color: ${colors.PrimaryOrange};
    border: 3px solid ${colors.SecondBlue};

    &:hover{
       font-size: 2.7rem;
       transition: 0.5s all ease;
       background-color: ${colors.SecondBlueForm};
       color: ${colors.PrimaryOrange};
       border: 3px solid ${colors.PrimaryOrange};
   };
`

export const LogoContainer = styled.div`
   margin-left: 0.5rem;
   display: flex;
   align-items: center;
   font-size: 5rem;
   font-family: sans-serif;
   background-color: ${colors.SecondBlueForm};
   padding: 1rem;
   border-radius: 30px;
   border: 4px solid ${colors.PrimaryOrange};

   p {
       &:nth-child(2) {
           font-size: 6rem;
           font-weight: bold;
           color: white;
       }
       &:nth-child(3){
           font-size: 7rem;
           color: ${colors.PrimaryOrange};
       }
   }

  img {
     width:80px;
     height:80px;
     margin-right: 20px;
     border-radius: 50px;
     
  }
`;

// https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg
// https://www.xtrafondos.com/descargar.php?id=3931&resolucion=3840x2160
// https://www.expreso.info/files/2021-06/Italia_Roma.jpg
// https://i.pinimg.com/originals/07/e1/05/07e1059911d72005a91f49bebedcd243.jpg