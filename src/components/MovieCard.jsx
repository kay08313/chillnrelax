import { Card } from "react-bootstrap";
import noimg from "/noimg.PNG";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={movie.posterURL || noimg}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = noimg;
        }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{movie.genre}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
