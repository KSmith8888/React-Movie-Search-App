import { Search } from "./Search";

function Header(props) {
    return (
        <header className="header-section">
            <h1 className="main-heading">React Movie Search App</h1>
            <Search setMovieData={props.setMovieData} />
        </header>
    );
}

export { Header };
