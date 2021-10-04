import React from 'react'
import { remove } from '../action/movieAction'
import { useDispatch } from 'react-redux'
const MovieCard = ({ id, movieName, rank }) => {
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(remove(id))
    }
    return (
        <div>
            <li>{movieName}-#{rank}</li>
            <button onClick={() => {
                handleRemove(id)
            }}>Remove</button>
        </div>
    )
}

export default MovieCard
