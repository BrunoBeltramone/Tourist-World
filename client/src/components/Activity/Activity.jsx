import React from "react";
import { Container, Formulario, Input, Select } from "./Activity_Style";

export default function Activity() {
  const [input, setInput] = React.useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
  });

  let handleChange = (e) => {
    e.preventDefault();
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //TENGO QUE VER COMO DESPACHAR LA ACCION Y GUARDARLA EN LA BASE DE DATOS
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    setInput({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
    });
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
        <label> Nombre </label>
        <Input
          type={"text"}
          name={"nombre"}
          value={input.nombre}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label> Dificultad </label>
        
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
        {/* <input
          type={"text"}
          name={"temporada"}
          value={input.temporada}
          onChange={(e) => handleChange(e)}
        /> */}
        <Select type={"text"} name={"temporada"} value={input.temporada} onChange={(e) => handleChange(e)}>
            <option> Seleccione una Temporada </option>
            <option> Invierno </option>
            <option> Primavera </option>
            <option> Otoño </option>
            <option> Verano </option>
        </Select>
        <br />
        <br />
        <button type="submit"> Create </button>
      </Formulario>
    </Container>
  );
}
