import React from 'react'
import './MovieCards.scss'

const MovieCards = ({ children }) => {
    return (
        <ul className="movie-tiles">
            { children }
        </ul>
    )
}

export default MovieCards