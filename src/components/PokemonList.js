import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { PokemonCard } from './PokemonCard'
import { Loader } from './Loader'

export const PokemonList = () => {


    const {allPokemons, loading} = useContext(PokemonContext)

  return (
    <>

      {loading ? (
        <Loader/>
      ) : (
          <div className='pokedex'>
            {allPokemons.map(pokemon =>(
                <PokemonCard pokemon={pokemon} key={pokemon.id}/>
            ))}
        </div>
      )}
      
    </>
  )
}
