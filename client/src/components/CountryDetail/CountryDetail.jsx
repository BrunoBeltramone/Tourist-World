import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions/index";
import { Card } from "./../Home/Card";
import { Container } from "./CountryDetail_Style";


export default function CountryDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const Country =  useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountryById(id))
  },[dispatch, id])


  return(
    <Container>
              <Card
                nombre={Country.nombre}
                id={Country.id}
                capital={Country.capital}
                subregion={Country.subregion}
                area={Country.area}
                poblacion={Country.poblacion}
                continente={Country.continente}
                imagen={Country.imagen}
                key={Country.id}
              />
    </Container>
  )
}