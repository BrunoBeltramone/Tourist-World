import React from "react";
import Logo from "./../../images/mundial.gif"
import { Container, LogoContainer, Menu, MenuItemLink, Wrapper } from "./NavBar_Style";


export default function NavBar() {
    return(
        <Container>
            <Wrapper>
                <LogoContainer>
                    <img src={Logo} alt={'Nt'}/>
                    <p>Tourist</p>
                    <p>World</p>
                </LogoContainer>
                <Menu>
                    <MenuItemLink to={'/countries'}>Home</MenuItemLink>
                    <MenuItemLink to={'/activity'}>Activity</MenuItemLink>
                    <MenuItemLink to={'/about'}>About</MenuItemLink>
                </Menu>
            </Wrapper>
        </Container>
    )
}
