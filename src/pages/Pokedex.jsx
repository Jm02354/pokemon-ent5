import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/pokedex/PokeCard'
import PokeSelect from '../components/pokedex/PokeSelect'
import './styles/pokedex.css'
import Paginate from '../components/pokedex/Paginate'


const Pokedex = () => {

  const trainer = useSelector((store) => store.trainer)
  const [page, setPage] = useState(1)
  const [inputValue, setInputValue] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const [pokemons, getPokemons, getType] = useFetch();

  useEffect(() => {
    if (typeFilter) {
      getType(typeFilter)
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=386'
      getPokemons(url)
    }
  }, [typeFilter])
  
  const textInput = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = '';
  } 

  const quantity = 12;
  const total = Math.ceil(pokemons?.results.length / quantity)
  const pagination = () => {
    const end = quantity * page;
    const start = end - quantity;
    const pok = pokemons?.results.filter(cbFilter).slice(start, end)
    return [pok]
  }

  console.log(pokemons)

  const cbFilter = (poke) => {
    return poke.name.includes(inputValue);
  }

  return (
    <div className='pokedex'>
      <h3 className='pokedex__wave'><span>Welcome {trainer}, </span>here you could find your favorite pokemon, let´s go</h3>
      <div className='pokedex__filters'>
        <form className='pokedex__form' onSubmit={handleSubmit}>
          <input ref={textInput} type="text" placeholder='Search a pokemon' />
          <button className='pokedex__btn'>Search</button>
        </form>
        <PokeSelect
          setTypeFilter={setTypeFilter}
        />
      </div>
      <Paginate
        page={page}
        setPage={setPage}
        total={total}
      />
      <div className='pokedex__container'>
        {
          pagination()[0]?.map((poke) => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
      <footer>
        <Paginate
        page={page}
        setPage={setPage}
        total={total}
        />
      </footer>
    </div>
  )
}

export default Pokedex
