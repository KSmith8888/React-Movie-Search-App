import { useState } from "react";

function Search(props) {
    const [searchText, setSearchText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`http://127.0.0.1:3000/movies/${searchText}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
        setSearchText("");
    }

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e);
            }}
        >
            <label labelFor="search-input">Search Movies:</label>
            <input
                id="search-input"
                type="search"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
}

export { Search };
