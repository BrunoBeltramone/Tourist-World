 import styled from 'styled-components'
 import { NavLink } from 'react-router-dom';
 import { colors } from '../../theme';

 export const Container = styled.div`
   display: flex;
    width: 100%;
    position: fixed;
    height: 90px;
    background-color: ${colors.SecondBlue};
 `;

 export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height:100%;
    display: flex;
    justify-content: space-between;
    margin: auto;
 `;
 
 export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: sans-serif;

    p {
        &:nth-child(2) {
            font-size: 2.3rem;
            font-weight: bold;
            color: white;
        }
        &:nth-child(3){
            font-size: 3rem;
            color: #e0792a;
        }
    }

   img {
      width:65px;
      height:65px;
      margin-right: 10px;
      border-radius: 50px;
   }
 `;
 export const Menu = styled.ul`
    display: flex;
    list-style: none;
 `;
 export const MenuItem = styled.li`
 `;

 export const MenuItemLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: ${colors.Primary};
    font-family: sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: ${colors.SecondBlue};
        background-color: ${colors.Primary};
        font-size: 1.35rem;
        transition: 0.5s all ease;
    }

 `;