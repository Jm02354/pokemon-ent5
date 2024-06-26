import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeSelect.css'

const PokeSelect = ({setTypeFilter}) => {

  const [types, getTypes] = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/type`
    getTypes(url)
  }, [])

  const valueSelect = useRef()

  const handleChange = () => {
    setTypeFilter(valueSelect.current.value);
  }
  
  console.log(setTypeFilter)
  return (
    <select className='pokeselect' ref={valueSelect} onChange={handleChange}>
      <option className='pokeselect__title' value="">All pokemons</option>
      {
        types?.results.map(type => (
          <option className='pokeselect__subtitle' key={type.url} value={type.url} >{type.name}</option>
        ))
      }
    </select>
  )
}

export default PokeSelect
