import { useEffect, useState } from "react";

import { Header } from "./Header";
import { Movie } from "./Movie";
import { Footer } from "./Footer";

function App() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/movies/batman")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setMovies(
                    data.Search.map((film) => {
                        return (
                            <Movie
                                key={film.imdbID}
                                title={film.Title}
                                year={film.Year}
                                image={film.Poster}
                            />
                        );
                    })
                );
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="container">
            <Header setMovieData={setMovieData} movieData={movieData} />
            <main className="results-container">{movies}</main>
            <Footer />
        </div>
    );
}

export { App };
