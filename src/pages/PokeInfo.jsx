import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import './styles/pokeInfo.css'

const PokeInfo = () => { 

  const [pokemon, getPokemon] = useFetch()

  const { id } = useParams();

  
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    getPokemon(url)
  }, [])

  console.log(pokemon)


  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(`/pokedex`)
  }
  
  return (
    <>
    <button onClick={handleReturn} className='returnbtn'>Return</button>
    <section className='pokeinfo'>
       
      <div className={`pokeinfo__header ${pokemon?.types[0].type.name}`}>
        <figure >
          <img className='pokeinfo__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </figure>
      </div>

      <div className='pokeinfo__namecont'>
        <h2 className='pokeinfo__num'>#{pokemon?.id}</h2>
        <span className='pokeinfo_name'>
          <hr className='poke_hr' /><h2>{pokemon?.name}</h2>
          <hr className='poke_hr' />
        </span>
      </div>

       <div className='pokeinfo__details'>
        <ul className='pokeinfo__weight'>
          <li className='pokeinfo__weight1'><span>Weight</span>
            <span> {pokemon?.weight}</span>
          </li>
        </ul>
        <ul className='pokeinfo__height'>
          <li className='pokeinfo__height1'><span>Height</span><span> {pokemon?.height}</span></li>
        </ul>
      </div>

      <div className='pokeinfo__cont2'>
        <div className='pokeinfo__types'>
          <h2>Type</h2>
          <ul className='pokeinfo__type'>
          {
            pokemon?.types.map(type => (
              <li className={`types ${pokemon?.types[0].type.name}`}><span>{type.type.name}</span></li>
            ))
          }
          </ul>
        </div>

        <div className='pokeinfo__abilities'>
          <h2 className='abilitiestitle'>Abilities</h2>
          <ul className='pokeinfo__abilitie'>
          {
            pokemon?.abilities.map(abilitie => (
              <li><span>{abilitie.ability.name}</span></li>
            ))
          }
          </ul>
        </div>
      </div>

      <div className='stats-section'>
        <h2 className='stats-title'>Stats</h2>
        <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map(stat => (
            <li className='pokeinfo__stats-item' key={stat.stat.url}>
              <span className='stat-name'>{stat.stat.name}</span>
              <span className='stat-value' >{stat.base_stat}/250</span>
              <div className='outbar'>
                <div className='inbar' style={{width:`${stat.base_stat/2.5}%`,}}></div>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
      
      <div className='movements__container'>
          <h3>Movements</h3>
          <div className='movements-list'>
          {
            pokemon?.moves.map(move => (
              <div className='movements'><span>{move.move.name}</span></div>
            ))
            }
          </div>
      </div>
    </section>
    </>
  )
}

export default PokeInfo
