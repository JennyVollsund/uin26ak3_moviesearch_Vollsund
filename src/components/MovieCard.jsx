export default function MovieCard({ movie }) {
    return (
        <li>
            <article>
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>

                {movie.Poster && movie.Poster !== "N/A" ? (
                    <img src={movie.Poster} alt={movie.Title} />
                ) : (
                    <p>Ingen plakat tilgjengelig</p>
                )}
            </article>
        </li>
    );
}