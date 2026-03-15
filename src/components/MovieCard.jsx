import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
    


    return (
        <li>
            <article>
                <Link to={`/movie/${movie.imdbID}`}>
                    <h2>{movie.Title}</h2>
                    <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"} alt={movie.Title}/>
                </Link>
                <p>{movie.Year}</p>
            </article>
        </li>
    )
}
    
//prøvd å fikse de ødlagte bildene/ de som ikke finnes