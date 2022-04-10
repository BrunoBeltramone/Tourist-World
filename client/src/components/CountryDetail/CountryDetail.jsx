import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions/index";
import {
  Container,
  ContainerGrande,
  Img,
  Informacion,
  Texto,
} from "./CountryDetail_Style";

export default function CountryDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const Country = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <ContainerGrande>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container>
        <Img>
          <img src={Country.imagen} alt={"Error"}/>
        </Img>
        <Informacion>
          <Texto>{Country.nombre}</Texto>
          <Texto>Id: {Country.id}</Texto>
          <Texto>Continente: {Country.continente}</Texto>
          <Texto>Subregion: {Country.subregion}</Texto>
          <Texto>Capital: {Country.capital}</Texto>
          <Texto>Area: {Country.area} km2</Texto>
          <Texto>Poblacion: {Country.poblacion}</Texto>
        </Informacion>
        {/* <Card
                nombre={Country.nombre}
                id={Country.id}
                capital={Country.capital}
                subregion={Country.subregion}
                area={Country.area}
                poblacion={Country.poblacion}
                continente={Country.continente}
                imagen={Country.imagen}
                key={Country.id}
              /> */}
      </Container>
    </ContainerGrande>
  );
}
