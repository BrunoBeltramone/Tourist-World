import React from "react";
import { ContainerActivities, MainContainer, Texto, TheActivity, TheBack, TheFront, Title } from "./Activity_Style";

export const Activity = ({nombre, dificultad, duracion, temporada}) => {

    var TextDificultad = dificultad <= 2 ? "Por lo que no es necesario tener experiencia previa" : 
    dificultad <= 4 ? "Sugerimos que hayan tenido experiencias Previas antes de Realizar esta actividad" : 
    "Es de las actividades mas Duras y Dificiles que se podria encontrar, Solo recomendada para apasionados, con un gran recorrido en la disciplina"

    // return (
    //     <MainContainer>
    //         <TheActivity>
    //             <Title>{nombre}</Title>
    //             {/* <Texto>{dificultad}</Texto>
    //             <Texto>La duracion es de {duracion}</Texto>
    //             <Texto>La estacion ideal es la {temporada}</Texto> */}
    //             <br/>
    //             <Texto>
    //                 La actividad {nombre}, es ideal para realizarse en {temporada}. Usualmente, tiene una 
    //                 duracion aproximada de {duracion} y en nuestro ranking, le damos una dificultad
    //                 de {dificultad}. {TextDificultad}
    //             </Texto>
    //         </TheActivity>
    //     </MainContainer>
    // )

    return (
    <MainContainer> 
      <TheActivity>
        <TheFront>
            <Title>{nombre}</Title>
            <Texto>
                La actividad {nombre} es ideal para realizarse en {temporada}. Usualmente, tiene una 
                duracion aproximada de {duracion} y en nuestro ranking, le damos una dificultad
                de {dificultad}. {TextDificultad}
            </Texto>
        </TheFront>
        <TheBack>
        <Title>Detalles</Title>
          <Texto>Actividad: {nombre}</Texto>
          <Texto>Dificultad: {dificultad}</Texto>
          <Texto>Duracion: {duracion}</Texto>
          <Texto>Temporada: {temporada}</Texto>
        </TheBack>
      </TheActivity>
    </MainContainer>
  )
}
