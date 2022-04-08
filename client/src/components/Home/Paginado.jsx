import React from "react";
import { Container, Menu, MenuItemLink,  } from "./Paginado_Style";

export default function Paginado({countries, countriesPerPage, paginado}){

    const pageNumbers = []

    for(let i=1; i <= Math.ceil(countries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <Container>
            <Menu>
                {
                    pageNumbers && pageNumbers.map( number =>(
                        <MenuItemLink key={number} onClick={() => paginado(number)} >{number}</MenuItemLink>
                    ))
                }
            </Menu>
        </Container>
    )
}