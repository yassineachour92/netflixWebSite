import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Row.css"
import ReactPlayer from 'react-player'
const base_url = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLargerRow }) {
    const [movies, setMovies] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        getData()
    }, [fetchUrl])
    console.log("ere",process.env.API_KEY)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        onClick={()=>setShow(!show)}
                        key={movie.id}
                        className={`row__poster ${isLargerRow && "row__posterLarger"}`}
                        src={base_url + (isLargerRow ? movie.poster_path : movie.backdrop_path)} alt={movie.name} />
                ))}
            </div>
           {show && <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />}
        </div>
    )
}

export default Row