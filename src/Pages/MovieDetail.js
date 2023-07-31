import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImage from "../Assets/noImage.png";

const MovieDetail = () => {
  const { titleID } = useParams();

  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    const url = `https://imdb8.p.rapidapi.com/title/get-plots?tconst=${titleID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };
    //imdb8.p.rapidapi.com/title/get-plots?tconst=tt9603082
    https: try {
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
    return <div className="loader"></div>;
  }

  return (
    <div className="moviedetail-container">
      <div className="moviedetail-card">
        <h1 className="moviedetail-title">{movie?.base.title}</h1>
        <p className="moviedetail-year">
          Year: {movie?.base.year || "No info"}
        </p>
        <img
          className="moviedetail-card-img"
          height={600}
          width={400}
          src={movie?.base?.image?.url || noImage}
          alt={movie?.base?.title}
        />
        <p className="moviedetail-episodes">
          Number of episodes: {movie?.base?.numberOfEpisodes || "No info"}
        </p>
      </div>
      <div className="plot-container">
        <h3 className="plot-header">Plot:</h3>
        <p className="plot-info">{movie?.plots[0]?.text}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
