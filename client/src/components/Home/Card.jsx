import React from 'react'
import { Carta } from './Card_Style'

export const Card = ({nombre, imagen, continente}) => {
  return (
    <Carta>
        <img src={imagen} alt="NI" />
        <h2>{nombre}</h2>
    </Carta>
  )
}
