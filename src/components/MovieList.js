import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ascendingByName, ascendingByRank, decendingByName, decendingByRank } from './helper'
import MovieCard from './MovieCard'



const MovieList = () => {

  const movies = useSelector((state) => {
    return state.movie
  })
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [filteredMovies, setMovies] = useState([])
  const handleChange = (e) => {
    if (e.target.name == 'search') {
      setSearch(e.target.value)
      filter()
    }
    if (e.target.name === 'sort') {
      setSort(e.target.value)
      if (sort === 'A-to-Z') {
        setMovies(ascendingByName(movies))
        console.log(ascendingByName(movies))
      } else if (sort === 'z-to-A') {
        setMovies(decendingByName(movies))
      } else if (sort === '1-to-100') {
        setMovies(ascendingByRank(movies))
      } else if (sort === '100-to-1') {
        setMovies(decendingByRank(movies))
      }
    }

  }
  const filter = () => {
    const searched = movies.filter(ele => {
      return ele.movieName.includes(search)
    })
    setMovies(searched)
  }
  return (
    <div>
      <input type='text' name='search' placeholder='search by name' value={search} onChange={handleChange} />
      <select value={sort} name='sort' onChange={handleChange}>
        <option >order by</option>
        <option value='A-to-Z'>ascending by name</option>
        <option value='z-to-A'>descending by name</option>
        <option value='1-to-100'>ascending by rank</option>
        <option value='100-to-1'>descending by rank</option>
      </select>
      {
        movies.length === 0 ? (
          <h3>Add your Favorite movies</h3>
        ) : (
          <React.Fragment>
            <ul>
              {
                (search.length > 0 ? filteredMovies : movies).map((ele, i) => {
                  return <MovieCard key={i} {...ele} />
                })
              }
            </ul>

          </React.Fragment>
        )
      }
    </div>
  )
}

export default MovieList
