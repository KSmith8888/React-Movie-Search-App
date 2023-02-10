/*
Response: "True"
Search: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
time: 1675987616256
totalResults: "523"

Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
Title: "Batman Begins"
Type: "movie"
Year: "2005"
imdbID: "tt0372784"
*/

function Movie(props) {
    props.title = "Movie Title";
    props.year = 1991;
    return (
        <div className="movie-container">
            <h2 className="movie-title">
                {props.title} <span className="movie-year">({props.year})</span>
            </h2>
            <img
                className="movie-image"
                src={props.image}
                alt={`${props.title} movie poster`}
            />
        </div>
    );
}

export { Movie };
