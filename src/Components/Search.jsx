import { useState } from "react";
import { Movie } from "./Movie";

function Search(props) {
    const [search, setSearch] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        fetch(
            `https://api-proxy-server-production-dfe7.up.railway.app/movies/${search}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                props.setMovieData(
                    data.Search.map((film) => {
                        return (
                            <Movie
                                key={film.imdbID}
                                title={film.Title}
                                year={film.Year}
                                image={film.Poster}
                                id={film.imdbID}
                            />
                        );
                    })
                );
            })
            .catch((err) => {
                console.error(err);
                props.setMovieData(
                    <h2 className="error-text">
                        Sorry, there has been an error getting the requested
                        data. Please try again later.
                    </h2>
                );
            });
        setSearch("");
    }

    return (
        <form
            className="search-form"
            onSubmit={(e) => {
                handleSubmit(e);
            }}
        >
            <label htmlFor="search-input" className="search-label">
                Search Movies:
            </label>
            <input
                id="search-input"
                type="search"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
}

export { Search };
