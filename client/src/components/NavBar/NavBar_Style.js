 import styled from 'styled-components'
 import { NavLink } from 'react-router-dom';
 import { colors } from '../../theme';

 export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${colors.SecondBlue};
    color:#0066FF;
 `;

 export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
 `;
 
 export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;

    p {
        &:nth-child(2) {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
        }
        &:nth-child(3){
            font-size: 2.15rem;
            color: ${colors.PrimaryOrange};
        }
    }

   img {
      width:50px;
      height:50px;
      margin-right: 20px;
      
   }
 `;
 export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
 `;
 export const MenuItem = styled.li`
    height: 100%;
 `;
 export const MenuItemLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: ${colors.PrimaryOrange};
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: ${colors.SecondBlue};
        background-color: ${colors.PrimaryOrange};
        font-size: 1.05rem;
        transition: 0.5s all ease;
    }
 `;