import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${search}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "381428dafdmsh81ece4824a10633p1529e6jsn480b3c4a1837",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      if (search) {
        setIsLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        const moviesList = result.d || []; // Accessing the movies array from result.d or using an empty array as callback
        setMovies(moviesList);
        setSearch("");
        setIsLoading(false);
        console.log(movies);
      }
    } catch (error) {
      setError(error);
      console.error(error);
      // Handle the error
    }
  };

  const SearchMovie = (e) => {
    fetchData();
  };

  return (
    <div className="Home">
      <h1>Movies</h1>

      <div className="searchpanel">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn-search"
          type="button"
          onClick={() => SearchMovie()}
        >
          Search
        </button>
      </div>
      {isLoading && "Loading..."}
      {error}
      <section className="movie-container">
        <ul className="ul-movies">
          {movies?.map((movie) => {
            const { id, l, i, rank, y } = movie;
            const imageUrl = i?.imageUrl || "placeholder.jpg"; // Provide a placeholder image URL or a default value

            return (
              <div className="movies" key={id}>
                <li className="card">
                  <Link to={`/${id}`}>
                    <p className="movie-title">{l}</p>

                    {imageUrl && (
                      <img height={300} width={250} src={imageUrl} alt={l} />
                    )}
                    <p className="rank">rank:{rank}</p>
                    <h3 className="year">year:{y}</h3>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Home;
