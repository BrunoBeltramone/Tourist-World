import React from "react";
import { Container, Menu, MenuItemLink,  } from "./Paginado_Style";

export default function Paginado({countries, countriesPerPage, paginado}){

    const pageNumbers = []

    for(let i=1; i <= Math.ceil(countries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <Container>
            <Menu >
                {
                    pageNumbers.length>1 && pageNumbers.map( PageNumber =>(
                        <MenuItemLink key={PageNumber} onClick={() => paginado(PageNumber)} >{PageNumber}</MenuItemLink>
                    ))
                }
            </Menu>
        </Container>
    )
}