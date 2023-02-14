import { useEffect, useState } from "react";

import { Header } from "./Header";
import { Movie } from "./Movie";
import { Footer } from "./Footer";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(
            "https://api-proxy-server-production-dfe7.up.railway.app/movies/search/batman"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(
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
                setMovies(
                    <h2 className="error-text">
                        Sorry, there has been an error getting the requested
                        data. Please try again later.
                    </h2>
                );
            });
    }, []);

    return (
        <div className="container">
            <Header setMovieData={setMovies} />
            <main className="results-container">{movies}</main>
            <Footer />
        </div>
    );
}

export { App };
