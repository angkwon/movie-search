import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, MovieCard, MovieCards } from './components'

import './App.scss';

const App = () => {

    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [noResults, setNoResults] = useState(false)
    const [pageNum, setPageNum] = useState(1)

    const URL = "https://api.themoviedb.org/3/search/movie"
    const API_KEY = "d7a3a18bf1f75a32e20a4c21012ba47b"


    const handleInputChange = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {

        const getMovies = (page) => {
            axios.get(`${ URL }?api_key=${ API_KEY }&language=en-US&query=${ search }&page=${ page }&include_adult=false`)
                .then((res) => {
                    const arr = res.data.results
    
                    if (arr.length !== 0) {
                        const movies = arr.map((movie) => {
                            const { overview, poster_path, release_date, title, vote_average } = movie
                            // format
                            return { overview, poster_path, release_date, title, vote_average }
                        })
    
                        setNoResults(false)
                        setResults([].concat(movies))
                    } else {
                        setNoResults(true)
                        setResults([])
                    }
                })
        }

        
        if (search.length !== 0) {
            getMovies(pageNum)
        } else {
            setResults([])
        }
        
    }, [search, pageNum])

    const handlePrev = () => {
        let curr = pageNum
        curr--
        setPageNum(curr)
    }

    const handleNext = () => {
        let curr = pageNum
        curr++
        setPageNum(curr)
    }

    return (
        <div className="app-movie-search">
            <header>
                <h1>Movie Search</h1>
            </header>
            
            <label>
                <input
                    type="text"
                    title="search"
                    name="search"
                    className="search-field"
                    value={ search }
                    onChange={ handleInputChange }
                    placeholder="Search by movie title"
                />
            </label>

            <MovieCards>
                { results && results.map((movie, i) => {
                    const { overview, poster_path, release_date, title, vote_average } = movie

                    return (
                        <MovieCard
                            key={ i }
                            date={ release_date }
                            overview={ overview }
                            path={ poster_path }
                            title={ title }
                            rating={ vote_average }
                        />
                        )
                    })
                }

                { noResults && search && <p>No Results Found</p> }
            </MovieCards>

            { results.length > 0 && 
                <div className="pagination">
                    <Button onClick={ handlePrev } disabled={ pageNum === 1 } type="secondary">Prev</Button>
                    <span>{ pageNum }</span>
                    <Button onClick={ handleNext } type="secondary">Next</Button>
                </div>
            }
        </div>
    )
}

export default App;
