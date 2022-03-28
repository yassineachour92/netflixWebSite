import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests  from './requests'
function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
       const fetchData=async ()=>{
const request=await axios.get(requests.fetchNetflixOriginals)
setMovie(request.data.results[Math.floor(Math.random()*request.data.results.lenth -1)])
       }
       fetchData()
    }, [])
    
    return (
        <header>

        </header>
    )
}

export default Banner