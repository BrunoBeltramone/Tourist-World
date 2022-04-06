import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 70px;
   background-color: #212F3D;
   color:#0066FF;
`;

export const MenuItemLink = styled.div`
   
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.5rem 2.5rem;
color: white;
font-family: sans-serif;
font-size: 5rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;
background-color: orangered;

&:hover{
    color: white;
    background-color: #e0792a;
    transition: 0.5s all ease;
}`;