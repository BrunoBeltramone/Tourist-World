import React, { useState } from 'react'
import { getCountryByName } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import { Boton, Container, Input } from './SearchBar_Style'

export default function SearchBar(){

  const [nombre, setNombre] = useState('');
  const dispatch = useDispatch();

    const handleOnChange = (e) => {
      e.preventDefault();
      setNombre(e.target.value)
    }

    const handleOnSubmit = (e) => {
      e.preventDefault();
      dispatch(getCountryByName(nombre));
      setNombre('')
    }

  return (
    <Container >
      <Input type='text' value={nombre} placeholder='Find Contries ...' onChange={(e) => handleOnChange(e)}/>
      <Boton type='submit' onClick={(e) => handleOnSubmit(e)}> Search </Boton>
    </Container>
  )
}
