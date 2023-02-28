import React from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import "./MovieDetails.css";
const MovieDetails = ({ movie }) => {
  const params = useParams();

  const mov = movie.find((el) => el.id === Number(params.id));
  return (
    <div className="details">
      <h1>{mov.title}</h1>
      <div className="part1" style={{ height: "400px" }}>
        <img
          className="movimage"
          src={mov.posterUrl}
          alt="ima"
          style={{ height: "400px" }}
        />
        <iframe
          src={mov.trailer}
          title="vid"
          className="vid"
          frameborder="2px"
          style={{ height: "400px", width: "700px" }}
        ></iframe>
      </div>
      <p className="description">
        <h2>Movie Description :</h2> {mov.description}
        <p> Released on : {mov.date}</p>
        <p> Movie Rate :</p>
        <ReactStars
          classNames="stars"
          count={mov.rate}
          size={24}
          isHalf={true}
          color="#ffd700"
        />
      </p>
    </div>
  );
};

export default MovieDetails;
