import React from 'react'

export const Card = ({nombre, imagen, continente}) => {
  return (
    <div>
        <h2>{nombre}</h2>
        <br />
        <img src={imagen} alt="NI" />
    </div>
  )
}
