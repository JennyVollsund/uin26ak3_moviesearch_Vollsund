import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
    const fallback = "https://via.placeholder.com/300x450?text=No+Image"

    return (
        <li>
            <article>
                <Link to={`/movie/${movie.imdbID}`}>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>

                    <img src={movie.Poster !== "N/A" ? movie.Poster : fallback} alt={movie.Title}
                        onError={(e) => {
                            if (e.target.src !== fallback) {
                                e.target.src = fallback
                            }
                        }}
                    />
                </Link>
            </article>
        </li>
    )
}
    
