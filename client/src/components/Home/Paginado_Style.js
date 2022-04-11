import styled from 'styled-components'
import { colors } from '../../theme';

export const Container = styled.div`
   display: flex;
   
   align-content: flex-end;
   margin: auto;
   width: min-content;
   height: 50px;
   /* background-color: ${colors.SecondBlue}; */
`;

export const Menu = styled.ul`
   width: 100%;
   display: flex;
   /* flex-wrap: wrap; */
   /* justify-content: center; */
   list-style: none;
   `;

export const MenuItemLink = styled.a`
   display: flex;
   width: 60px;
   text-decoration: none;
   justify-content: center;
   align-items: center;
   color: ${colors.Primary};
   background-color: ${colors.SecondBlue};

   border: 1.5px solid ${colors.Primary};
   margin: 3px;
   font-size: 1.4rem;
   font-weight: bold;
   cursor: pointer;
   transition: 0.5s all ease;

   &:hover{
       color: ${colors.SecondBlue};
       background-color: ${colors.Primary};
       font-size: 1.56rem;
       transition: 0.5s all ease;
   };

`;

