import React from 'react'
import { useSelector } from 'react-redux'
import { decendingByRank } from './helper'

const Moviestats = () => {
    const movies = useSelector((state) => {
        return state.movie
    })
    const topRanked = () => {
        const top = decendingByRank(movies)
        return movies.length == 0 ? null : top[0].movieName
    }
    return (
        <div>
            <h2>Movie Stats</h2>
            <b>Total Movies-{movies.length}</b>
            <br />
            <b>Top Ranked Movies-{topRanked()}</b>
        </div>
    )
}

export default Moviestats
