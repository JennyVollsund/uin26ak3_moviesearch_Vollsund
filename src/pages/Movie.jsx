import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Movie(){
    const {movie}=useParams()

    const [movieDetails, setMovieDetails] = useState(null)
    const apiKey = import.meta.env.VITE_APP_API_KEY



        useEffect(()=>{
        getMovie()
    },[])
    return 
    <main>
      <article>
        <h1>{movie}</h1>
        <img src={movieDetails.Poster} alt={movieDetails.Title}/>
      </article>
    </main>
}