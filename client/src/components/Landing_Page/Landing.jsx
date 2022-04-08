import React from 'react'
import { Container, Link, LogoContainer } from './LandingStyle'
import Logo from "./../../images/mundial.gif"


export default function Landing() {
  return (
      <Container>
        <LogoContainer>
                    <img src={Logo} alt={'h'}/>
                    <p>Tourist</p>
                    <p>World</p>
                </LogoContainer>
        <Link to={'/countries'}>Bienvenido</Link>
      </Container>
      )
}
