import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Error,
  Formulario,
  Input,
  Label,
  Select,
  Ul,
} from "./Activity_Style";
import { getAllCountries, postActivity } from "../../redux/actions";

export default function Activity() {
  var dispatch = useDispatch();
  var paises = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function validate(input) {
    let errors = {};
    if (!input.nombre) {
    errors.nombre = "* Este campo es Obligatorio";
    }
    // else if (input.name.length < 4) {
    //   errors.nombre = "El nombre tiene que tener una longitud mayor a 4";
    // } 
    // else if (input.name.length > 23) {
    //   errors.nombre = "El nombre tiene que tener una longitud menor a 23";
    // }

    if(!input.duracion) {
      errors.duracion = "* Este campo es Obligatorio";
    }


    if(!input.dificultad){
      errors.dificultad = "* Este campo es Obligatorio"
    }
    else if(input.dificultad === "Seleccione una Dificultad" ){
      errors.dificultad = "* Este campo es Obligatorio"
    }


    if(!input.temporada){
      errors.temporada = "* Este campo es Obligatorio"
    }
    else if(input.temporada === "Seleccione una Temporada" ){
      errors.temporada = "* Este campo es Obligatorio"
    }


    if(!input.paises){
      errors.paises = "* Seleccione por lo menos 1 Pais"
    }

    return errors;
  }

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    paises: [],
  });

  let handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  let handleSelect = (e) => {
    e.preventDefault();
    if (input.paises.includes(e.target.value)) {
      return;
    } else {
      setInput({
        ...input,
        paises: [...input.paises, e.target.value],
      });
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivity(input));
    setInput({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      paises: [],
    });
    return alert("Actividad creada");
  };

  let handleDelete = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      paises: [...input.paises.filter(!e.target.value)],
    });
  };

  return (
    <Container>
      <Formulario onSubmit={(e) => handleSubmit(e)}>
        <h1> Activity </h1>
        <br />
        <br />
        <Label> Nombre Actividad </Label>
        <Input
          type={"text"}
          name={"nombre"}
          value={input.nombre}
          onChange={(e) => handleChange(e)}
        />{
          errors.nombre && (
            <Error>{errors.nombre}</Error>
          )
        }

        <Label> Dificultad </Label>

        <Select
          type={"text"}
          name={"dificultad"}
          value={input.dificultad}
          onChange={(e) => handleChange(e)}
        >
          <option> Seleccione una Dificultad </option>
          <option> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
          <option> 4 </option>
          <option> 5 </option>
        </Select>
        {
          errors.dificultad && (
            <Error>{errors.dificultad}</Error>
          )
        }

        <label> Duracion </label>
        <Input
          type={"text"}
          name={"duracion"}
          value={input.duracion}
          onChange={(e) => handleChange(e)}
        />
        {
          errors.duracion && (
            <Error>{errors.duracion}</Error>
          )
        }

        <label> Temporada </label>
        <Select
          type={"text"}
          name={"temporada"}
          value={input.temporada}
          onChange={(e) => handleChange(e)}
        >
          <option> Seleccione una Temporada </option>
          <option> Invierno </option>
          <option> Primavera </option>
          <option> Otoño </option>
          <option> Verano </option>
        </Select>
        {
          errors.temporada && (
            <Error>{errors.temporada}</Error>
          )
        }

        <label> Paises </label>
        <Select onChange={(e) => handleSelect(e)}>
          {paises &&
            paises.map((p) => (
              <option value={p.nombre} key={p.id}>
                {p.nombre}
              </option>
            ))}
        </Select>
        {
          errors.paises && (
            <Error>{errors.paises}</Error>
          )
        }
        <Ul>
          {input.paises.map((pais) => {
            return (
              <li key={pais} onClick={(e) => handleDelete(e)}>
                <p type={"text"} name="paises" value={input.paises}>
                  {pais}
                </p>
                <button type="click">x</button>
              </li>
            );
          })}
        </Ul>

        <button> Create </button>
      </Formulario>
    </Container>
  );
}
