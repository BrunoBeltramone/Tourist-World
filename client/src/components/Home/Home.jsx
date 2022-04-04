import React, { useEffect } from "react";
import { Carta, Cartas, Container, Filtros } from "./Home_Style";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import { Card } from "./Card";

export default function Home() {
  const dispatch = useDispatch();
  const AllCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <Container>
      <br/>
      <Filtros>
        <select>
          <option>Alfabeticamente</option>
        </select>

        <select>
          <option>Continente</option>
        </select>

        <select>
          <option>A-Z</option>
        </select>
      </Filtros>
      <br/>
      <br/>
      <Cartas>
        
        {
          AllCountries?.map(country => {
            return(
              <Carta>
                <Card nombre={country.nombre} continente={country.continente} imagen={country.imagen} />
              </Carta>
            )
          })
        }
        </Cartas>
    </Container>
  );
}
