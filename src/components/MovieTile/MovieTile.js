import React from 'react'

const MovieCard = ({
    date,
    path,
    overview,
    title,
    rating
}) => {
    return (
        <li className="movie-tile">

            <div className="col-1">
                { path &&
                    <img
                        alt={ title }
                        src={ `https://image.tmdb.org/t/p/w500/${ path }`}
                    />
                }
                
            </div>
            
            <div className="col-2">
                <h3>{ title }</h3>
                <p>{ date }</p>
                <p>{ rating }</p>
                <p>{ overview }</p>
            </div>

        </li>
    )
}

export default MovieCard