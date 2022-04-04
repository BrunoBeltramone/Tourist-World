import React from "react";
import Logo from "./../../images/mundial.gif"
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./NavBar_Style";


export default function NavBar() {
    return(
        <Container>
            <Wrapper>
                <LogoContainer>
                    <img src={Logo} alt={'h'}/>
                    <p>Tourist</p>
                    <p>World</p>
                </LogoContainer>

                <Menu>
                    <MenuItem>
                        <MenuItemLink to={'/countries'}>Home</MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink to={'/activity'}>Activity</MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink to={'/about'}>About</MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    )
}
