import React from 'react'
import { Container } from './Activity_Style';


export default function Activity() {

    const [input, setInput] = React.useState({
        nombre: "" ,
        dificultad: "" ,
        duracion: "" ,
        temporada: "" ,
    }) 

    let handleChange = (e) => {
        e.preventDefault();
        setInput((prevState) => ({ ...prevState, [e.target.name]:e.target.value}))
    };

    //TENGO QUE VER COMO DESPACHAR LA ACCION Y GUARDARLA EN LA BASE DE DATOS
    let handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            nombre: "" ,
            dificultad: "" ,
            duracion: "" ,
            temporada: "" ,
        })
    };

  return (
    <Container>  
        <h1> Activity </h1>
        <br/>
        <form onSubmit={(e) => handleSubmit(e)}> 
            <label> Nombre </label>
            <input type={'text'} name={'nombre'} value={input.nombre} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <label> Dificultad </label>
            <input type={'text'} name={'dificultad'} value={input.dificultad} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <label> Duracion </label>
            <input type={'text'} name={'duracion'} value={input.duracion} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <label> Temporada </label>
            <input type={'text'} name={'temporada'} value={input.temporada} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            <input type={'submit'} value={'Create'} />
        </form>
    </Container>
  )
}
