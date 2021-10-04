import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieSearch = () => {
    const movies = useSelector((state) => {
        return state.movie
    })

    return (
        <div>

            {
                filteredMovies.map(ele => {
                    return <MovieCard id={ele.id} movieName={ele.movieName} rank={ele.rank} />
                })
            }
        </div>
    )
}

export default MovieSearch
