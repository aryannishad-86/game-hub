import React from 'react'
import useGenres from '../hooks/useGenre'

const GenreList = () => {
    const {genres} = useGenres()
  return (
    <ul>
        {genres.map(genres => <li key = {genres.id}>{genres.name}</li> )}
    </ul>
  )
}

export default GenreList