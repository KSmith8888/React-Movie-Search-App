import { useState } from "react";

function Movie(props) {
    const [movieDetails, setMovieDetails] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function getMovieDetails() {
        fetch(
            `https://api-proxy-server-production-dfe7.up.railway.app/movies/details/${props.id}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovieDetails(
                    <div className="movie-details-container">
                        <article className="movie-details-info">
                            <h3 className="movie-details-title">
                                {data.Title}
                            </h3>
                            <p className="movie-details-rating">
                                Rating: {data.imdbRating}
                            </p>
                            <p className="movie-details-plot">{data.Plot}</p>
                            <p className="movie-details-director">
                                Directed by: {data.Director} Released:{" "}
                                {data.Released}
                            </p>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                                className="movie-details-close-btn"
                            >
                                Close
                            </button>
                        </article>
                        <img
                            src={data.Poster}
                            alt={`${data.Title} movie poster`}
                            className="movie-details-image"
                        />
                    </div>
                );
                setIsModalOpen(true);
            })
            .catch((err) => {
                console.error(err);
            });
    }
    return (
        <div className="movie-container">
            <h2 className="movie-title">{props.title}</h2>
            <p className="movie-year">({props.year})</p>
            <img
                className="movie-image"
                src={props.image}
                alt={`${props.title} movie poster`}
            />
            <button className="details-button" onClick={getMovieDetails}>
                Details
            </button>
            <dialog
                open={isModalOpen ? true : false}
                className="movie-details-modal"
            >
                {movieDetails}
            </dialog>
        </div>
    );
}

export { Movie };
