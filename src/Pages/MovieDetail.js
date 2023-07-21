import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { titleID } = useParams();

  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    const url = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${titleID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "381428dafdmsh81ece4824a10633p1529e6jsn480b3c4a1837",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if (result) {
        setMovie(result);
      }
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="moviedetail-container">
      <div className="moviedetail-card">
        <h1 className="moviedetail-title">{movie.title}</h1>
        <p className="moviedetail-year">Year:{movie.year}</p>
        <img
          className="moviedetail-card-img"
          height={600}
          width={400}
          src={movie.image.url}
          alt={movie.title}
        />
        <p className="moviedetail-episodes">
          Number of episodes:{movie.numberOfEpisodes}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
