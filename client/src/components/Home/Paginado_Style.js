import styled from 'styled-components'
import { colors } from '../../theme';

export const Container = styled.div`
   width: 80%;
   height: 50px;
   background-color: ${colors.SecondBlue};
   margin-left: 10%;
`;

export const Menu = styled.ul`
   width: 100%;
   display: flex;
   /* flex-wrap: wrap; */
   justify-content: space-between;
   list-style: none;
   `;

export const MenuItemLink = styled.a`
   text-decoration: none;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
   width: 100%;
   color: ${colors.PrimaryOrange};
   font-family: sans-serif;
   font-size: 1.1rem;
   font-weight: bold;
   cursor: pointer;
   /* transition: 0.5s all ease; */

   &:hover{
       color: ${colors.SecondBlue};
       background-color: ${colors.PrimaryOrange};
       font-size: 1.15rem;
       transition: 0.5s all ease;
   };

`;