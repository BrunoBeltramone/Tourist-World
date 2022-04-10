import React from 'react'
import { MainContainer, TheBack, TheCard, TheFront, Texto, Detail } from './Card_Style'

export const Card = ({nombre, id, capital, subregion, area, poblacion, imagen, continente}) => {

  // return (
  //   <Carta>
  //       <img src={imagen} alt="NI" />
  //       <h2>{nombre}</h2>
  //   </Carta>
  // )

  //---------------------------------------------------------------------------------------------------


  return (
    <MainContainer> 
      <TheCard>
        <TheFront>
          <img src={imagen} alt={'NT'}/>
          <h2>{nombre}</h2>
        </TheFront>
        <TheBack>
          <h2>{nombre}</h2>
          <br/>
          <Texto>Id: {id}</Texto>
          <Texto>Continente: {continente}</Texto>
          <Texto>Subregion: {subregion}</Texto>
          <Texto>Poblacion: {poblacion}</Texto>
          <Detail to={`/countries/${id}`}> More Information </Detail>
        </TheBack>
      </TheCard>
    </MainContainer>
  )
  
}
