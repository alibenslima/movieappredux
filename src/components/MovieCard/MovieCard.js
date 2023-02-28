import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { DELETE } from "../../redux/Action";
import { Link } from "react-router-dom";
import EditMovie from "../EditMovie/EditMovie";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card className="movie" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} alt="viiiiiide" />
        <Card.Body className="movie-over">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <h5>Release date : {movie.date}</h5>
            <ReactStars
              count={movie.rate}
              size={24}
              isHalf={true}
              color="#ffd700"
            />
          </Card.Text>
          <Link to={`/Details/${movie.id}`}>
            <Button variant="primary">Details</Button>
          </Link>
          <Button
            variant="danger"
            className="delete-btn"
            onClick={() => dispatch(DELETE(movie.id))}
          >
            Delete
          </Button>
          <EditMovie movie={movie} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
