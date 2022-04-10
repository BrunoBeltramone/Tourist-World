import React, { useEffect, useState } from "react";
import {
  Cartas,
  Container,
  Filtros,
  CountryContainer,
  Select,
  FlechaPaginadoIzq,
  FlechaPaginadoDer,
  CurrentPage,
  ContainerPaginado,
} from "./Home_Style";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterCountriesByContinent,
  filterCountriesByName,
  filterCountriesByPoblation,
} from "../../redux/actions";
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
  const currentCountries = Countries.slice(firsCountry, lastCountry);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);


  
  var handleFilterByName = (e) => {
    e.preventDefault();
    dispatch(filterCountriesByName(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };
  
  var handleFilterByContinent = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterCountriesByContinent(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };
  
  var handleFilterByPoblation = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterCountriesByPoblation(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };
  
  var handlehandlePagingIzq = (e) => {
    e.preventDefault();
    if(currentPage === 1) return
    setCurrentPage((prev) => prev - 1)
    setOrder(`Ordenado ${e.target.value}`);
  };
  var handlehandlePagingDer = (e) => {
    e.preventDefault();
    if(currentCountries < 10) return alert("Ya ha recorrido todos los paises")
    setCurrentPage((prev) => prev + 1)
    setOrder(`Ordenado ${e.target.value}`);
  };

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Filtros>
        <SearchBar />
        <Select onChange={(e) => handleFilterByName(e)}>
          <option> Filter by Name </option>
          <option value="asc"> Nombre Ascendente </option>
          <option value="desc"> Nombre Descendente </option>
        </Select>
        <Select onChange={(e) => handleFilterByContinent(e)}>
          <option value={"All"}> Filter by Continent </option>
          <option value={"Africa"}> Africa </option>
          <option value={"Americas"}> America </option>
          <option value={"Antarctic"}> Antartida </option>
          <option value={"Asia"}> Asia </option>
          <option value={"Europe"}> Europa </option>
          <option value={"Oceania"}> Oceania </option>
        </Select>
        <Select onChange={(e) => handleFilterByPoblation(e)}>
          <option> Filter by Poblation </option>
          <option value={"asc"}> Mayor Poblacion </option>
          <option value={"desc"}> Menor Poblacion </option>
        </Select>
        <Select>
          <option>Filter by Tourist Activities</option>
        </Select>
      </Filtros>
      <CountryContainer>
        <br />
        <br />
        <FlechaPaginadoIzq onClick={(e) => handlehandlePagingIzq(e)}> {'<'} </FlechaPaginadoIzq>
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
        <FlechaPaginadoDer onClick={(e) => handlehandlePagingDer(e)}> {'>'} </FlechaPaginadoDer>
      </CountryContainer>
      <br/>
      <br/>
      <br/>
      <CurrentPage>Page {currentPage}</CurrentPage>
      <Paginado
        countriesPerPage={countriesPerPage}
        countries={Countries.length}
        paginado={paginado}
        />
    </Container>
  );
}
