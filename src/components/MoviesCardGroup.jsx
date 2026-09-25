import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

function MoviesCardGroup({ movies }) {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id + movie.imdbId} md={2} sm={4} xs={6}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MoviesCardGroup;
