import React, { useEffect, useState } from "react";
import { Cartas, Container, Filtros, CountryContainer } from "./Home_Style";
import { useDispatch, useSelector,  } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import { Card } from "./Card";

export default function Home() {
  const dispatch = useDispatch();
  const AllCountries = useSelector((state) => state.countries);

  useEffect(() => {
      dispatch(getAllCountries());
  }, []);


  return (
    <Container>
      <br />
      <Filtros>
        <select>
          <option> A - Z </option>
          <option> Z - A </option>
        </select>

        <select>
          <option>Continente</option>
        </select>

        <select>
          <option>Actividad Turistica</option>
        </select>
      </Filtros>
      <CountryContainer>
        <br />
        <br />
        <Cartas>
          {AllCountries?.map((country) => {
            return (
              <Card
                nombre={country.nombre}
                id={country.id}
                capital={country.capital}
                subregion={country.subregion}
                area={country.area}
                poblacion={country.poblacion}
                continente={country.continente}
                imagen={country.imagen}
                key={country.id}
              />
            );
          })}
        </Cartas>
      </CountryContainer>
    </Container>
  );
}
