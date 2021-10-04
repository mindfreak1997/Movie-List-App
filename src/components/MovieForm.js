import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { movies } from '../action/movieAction'

const MovieForm = (props) => {
    const [movie, setMovie] = useState('')
    const [rank, setRank] = useState('')
    const [formError, setError] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (e.target.name === 'movie') {
            setMovie(e.target.value)
        } else {
            setRank(e.target.value)
        }
    }
    const error = {}
    const runValidation = () => {
        setError('')
        if (movie.trim().length == 0) {
            error.movie = 'movie name cannot be blank'
        }
        if (rank.trim().length == 0) {
            error.rank = 'rank cannot be blank'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(error).length > 0) {
            setError(error)
        } else {
            const formData = {
                id: uuidv4(),
                movieName: movie,
                rank: rank
            }
            dispatch(movies(formData))
            setMovie('')
            setRank('')
        }

    }
    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter movie name' name='movie' value={movie} onChange={handleChange} />
                {
                    formError.movie && <span>{formError.movie}</span>
                }
                <br />
                <input type='text' placeholder='IMDB Ranking' name='ranking' value={rank} onChange={handleChange} />
                {
                    formError.rank && <span>{formError.rank}</span>
                }
                <br />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default MovieForm
