import React from 'react'
import { useQuery } from 'react-query'
import Character from './character'


const Characters =() => {

    const fetchCharacter = async()  => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      return response.json()
    }

    const { isLoading, isFetching, error, data, status} = useQuery('characters', fetchCharacter)

    if(isLoading){
      return <div>Loading...</div>
    }

    if(error){
      return <div>Error</div>
    }

  return (
    <div className='characters'>
        {data.results.map((item, index) => {
           return <Character character={item} />
        })}
    </div>
  )
}

export default Characters