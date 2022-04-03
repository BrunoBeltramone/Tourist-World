import React from "react";
import Logo from "./../../images/mundial.gif"
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./NavBar_Style";

// export default function NavBar() {
//     return(
//         <nav>
//             <ul>
//                 <li>
//                     <NavLink to={'/countries'}> Home </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to={'/activity'}> Activity </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to={'/about'}> About </NavLink>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

export default function NavBar() {
    return(
        <Container>
            <Wrapper>
                <LogoContainer>
                    <img src={Logo}/>
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
