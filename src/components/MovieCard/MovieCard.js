import React from 'react'
import ComingSoon from '../../img/movie-poster-coming-soon.png'

import { Button } from '../index'
import './MovieCard.scss'

const MovieCard = ({
    date,
    path,
    overview,
    title,
    rating
}) => {

    // helper function - pull out into utils
    const truncate = (str, maxLen, separator = ' ') => {
        return str.length <= maxLen ? str : str.substr(0, str.lastIndexOf(separator, maxLen))
    }

    const desc = truncate(overview, 90)
    const dateObj = new Date(date)
    const year = dateObj.getUTCFullYear();

    return (
        <li className="movie-card">

            <section className="movie-card-poster">
                { path ?
                    <img
                        alt={ title }
                        src={ `https://image.tmdb.org/t/p/w154/${ path }`}
                    /> :
                    <img
                        alt="No poster"
                        src={ ComingSoon }
                    />
                }
            </section>

            <section className="movie-card-details">
                <div className="movie-card-details-info">
                    <h3>{ title.toUpperCase() }</h3>
                    <span className="subtext">{ year }</span>
                    <p>
                        { desc }
                        { overview.length > 80 ? <Button type="round">&#9702;&#9702;&#9702;</Button> : '' }
                    </p>
                    
                </div>
                
                <div className="movie-card-details-footer">
                    <span className="subtext">&#9734; { rating }</span>
                    <span>&#9825;</span>
                </div>
                
            </section>


        </li>
    )
}

export default MovieCard