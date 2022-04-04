import React from "react";
import { Container, Formulario } from "./Activity_Style";

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
        <label> Nombre </label>
        <input
          type={"text"}
          name={"nombre"}
          value={input.nombre}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label> Dificultad </label>
        
        <select type={"text"} name={"dificultad"} value={input.dificultad} onChange={(e) => handleChange(e)}>
            <option> Seleccione una Dificultad </option>
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
            <option> 4 </option>
            <option> 5 </option>
        </select>
        <br />
        <br />
        <label> Duracion </label>
        <input
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
        <select type={"text"} name={"temporada"} value={input.temporada} onChange={(e) => handleChange(e)}>
            <option> Seleccione una Temporada </option>
            <option> Invierno </option>
            <option> Primavera </option>
            <option> Otoño </option>
            <option> Verano </option>
        </select>
        <br />
        <br />
        <button type="submit"> Create </button>
      </Formulario>
    </Container>
  );
}
