import React, { useEffect, useState } from "react";
import { Cartas, Container, Filtros, CountryContainer, Select } from "./Home_Style";
import { useDispatch, useSelector,  } from "react-redux";
import { getAllCountries, filterCountriesByContinent, filterCountriesByName } from "../../redux/actions";
import { Card } from "./Card";
import SearchBar from "./SearchBar/SearchBar";
import Paginado from "./Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const Countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("");
  const [countriesPerPage, setcountriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firsCountry = lastCountry - countriesPerPage;
  const currentCountries = Countries.slice(firsCountry, lastCountry)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
      dispatch(getAllCountries());
  }, [dispatch]);

  function handleFilterByName(e){
    e.preventDefault();
    dispatch(filterCountriesByName(e.target.value));
    setOrder(`Ordenado ${ e.target.value}`)
  }

  var handleFilterByContinent = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterCountriesByContinent(e.target.value))
    setOrder(`Ordenado ${ e.target.value}`)
  }



  return (
    <Container>
      <br />
          <Paginado
            countriesPerPage={countriesPerPage}
            countries={Countries.length}
            paginado= {paginado}
          />
          <br/>
          <br/>
      <Filtros>
        <SearchBar/>

        <Select onChange={(e) => handleFilterByName(e)}>
          <option value='asc'> Ascendente </option>
          <option value='desc'> Descendente </option>
        </Select>

        <Select onChange={(e) => handleFilterByContinent(e)}>
          <option value={'All'}> Continente </option>
          <option value={'Africa'}> Africa </option>
          <option value={'Americas'}> America </option>
          <option value={'Antarctic'}> Antartida </option>
          <option value={'Asia'}> Asia </option>
          <option value={'Europe'}> Europa </option>
          <option value={'Oceania'}> Oceania </option>
        </Select>

        <Select>
          <option>Actividad Turistica</option>
        </Select>
      </Filtros>
      <CountryContainer>
        <br />
        <br />
        <Cartas>
          {currentCountries?.map((country) => {
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
