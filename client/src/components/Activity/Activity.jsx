import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Container, Formulario, Input, Label, Select } from "./Activity_Style";
import { getAllCountries, postActivity } from "../../redux/actions";

export default function Activity() {

  var dispatch = useDispatch()
  var paises = useSelector(state => state.allCountries)

  useEffect(() => {
    dispatch(getAllCountries())
  },[dispatch])

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
  };

  let handleSelect = (e) => {
    e.preventDefault();
    if(input.paises.includes(e.target.value)){
      return
    }else{   
      setInput({
        ...input,
        paises:[...input.paises, e.target.value] 
      });
    }
  }

  //TENGO QUE VER COMO DESPACHAR LA ACCION Y GUARDARLA EN LA BASE DE DATOS
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivity(input));
    setInput({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      paises:[],
    });
    return alert("Actividad creada")
  };

  return (
    <Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Formulario onSubmit={(e) => handleSubmit(e)}>
        <h1> Activity </h1>
        <br />
        <br />
        <Label> Nombre </Label>
        <Input
          type={"text"}
          name={"nombre"}
          value={input.nombre}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <Label> Dificultad </Label>
        
        <Select type={"text"} name={"dificultad"} value={input.dificultad} onChange={(e) => handleChange(e)}>
            <option> Seleccione una Dificultad </option>
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
            <option> 4 </option>
            <option> 5 </option>
        </Select>
        <br />
        <br />
        <label> Duracion </label>
        <Input
          type={"text"}
          name={"duracion"}
          value={input.duracion}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label> Temporada </label>
        <Select type={"text"} name={"temporada"} value={input.temporada} onChange={(e) => handleChange(e)}>
            <option> Seleccione una Temporada </option>
            <option> Invierno </option>
            <option> Primavera </option>
            <option> Otoño </option>
            <option> Verano </option>
        </Select>
        <br />
        <br />
        <label> Paises </label>
        <Select onChange={(e) => handleSelect(e)}>
          {
            paises && paises.map((p) => (
              <option value={p.nombre} key={p.id}>{p.nombre}</option>
            ))
          }
        </Select>
        <ul><li>{input.paises.map(pais => pais + ", ")}</li></ul>
        <br />
        <br />
        <button type="submit"> Create </button>
      </Formulario>
    </Container>
  );
}
