import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl ,isLargerRow}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            console.log(movies)
        }
        getData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargerRow && "row__posterLarger"}`}
                        src={base_url + (isLargerRow? movie.poster_path :movie.backdrop_path)} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row