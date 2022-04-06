import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, MenuItemLink } from './LandingStyle'

export default function Landing() {
  return (
      <Container>
        <div>La mejor Landing del Planeta Paaa</div>
        <MenuItemLink>
          <NavLink to={'/countries'}> GoCountries</NavLink>
        </MenuItemLink>
      </Container>
      )
}
