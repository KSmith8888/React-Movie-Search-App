function Movie(props) {
    return (
        <div className="movie-container">
            <h2 className="movie-title">{props.title}</h2>
            <p className="movie-year">({props.year})</p>
            <img
                className="movie-image"
                src={props.image}
                alt={`${props.title} movie poster`}
            />
        </div>
    );
}

export { Movie };
