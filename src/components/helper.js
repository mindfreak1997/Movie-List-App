export const decendingByName = (movies) => {
    movies.sort((a, b) => {
        if (a.movieName > b.movieName) {
            return 1
        } else if (a.movieName < b.movieName) {
            return -1
        }


    })
}

export const ascendingByName = (movies) => {
    movies.sort((a, b) => {
        if (a.movieName > b.movieName) {
            return -1
        } else if (a.movieName < b.movieName) {
            return 1
        }


    })
}

export const decendingByRank = (movies) => {
    const result = movies.sort((a, b) => a.rank - b.rank)
    return result
}

export const ascendingByRank = (movies) => {
    const result = movies.sort((a, b) => b.rank - a.rank)
    return result
}