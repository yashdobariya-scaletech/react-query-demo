import React from 'react'
import { useQuery } from 'react-query'


const Characters =() => {

    const fetchCharacter = async()  => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      return response.json()
    }

    const { isLoading, isFetching, error, data, status} = useQuery('cheracters', fetchCharacter)

    if(isLoading){
      return <div>Loading...</div>
    }

    if(error){
      return <div>Error</div>
    }

  return (
    <div>
        {data.results.map((item, index) => {
           return <p key={index}>{item.name}</p>
        })}
    </div>
  )
}

export default Characters