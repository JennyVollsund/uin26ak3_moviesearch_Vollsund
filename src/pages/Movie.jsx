import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Movie(){
   

    const { id } = useParams()

    const [movieDetails, setMovieDetails] = useState(null)
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getMovie = async ()=> {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
        const data = await response.json()
        setMovieDetails(data)
    }


    useEffect(() => {
        getMovie()
    }, [])

    if (!movieDetails) return <p>Laster...</p>


    return (

<main className="movie-page">
          <article className="movie-details">
             

             <h1>{movieDetails.Title}</h1>
             <img src={movieDetails.Poster} alt={movieDetails.Title} className="movie-poster" />
             <p>{movieDetails.Plot}</p>
             
             <p>År: {movieDetails.Year}</p>
             <p>Skuespillere: {movieDetails.Actors}</p>
             </article>
        </main>
    )
}
