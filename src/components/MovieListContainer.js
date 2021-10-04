import React from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'

import Moviestats from './Moviestats'

const MovieListContainer = () => {
    return (
        <div>
            <h1>My Big Movie List</h1>

            <MovieList />
            <MovieForm />
            <Moviestats />
        </div>
    )
}

export default MovieListContainer
