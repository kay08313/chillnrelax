import fetchMovies from "../components/FetchApi"; //movies api
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import MoviesCardGroup from "../components/MoviesCardGroup";
import Button from "react-bootstrap/Button";
import themelogo from "../components/themelogo.PNG";

function Home() {
  const [searchTerm, setsearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);

  const [selectedGenre, setSelectedGenre] = useState("all");

  const filteredMovies = movies.filter(
    (movie) =>
      (selectedGenre === "all" || movie.genre === selectedGenre) &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    async function loadData() {
      setloading(true);
      const data = await fetchMovies();
      setMovies(data);
      setloading(false);
    }
    loadData();
  }, []);

  return (
    <div className="text-white">
      <Container className="my-container">
        <Row>
          <Col className="column">
            <img className="themelogo" src={themelogo} alt="themelogo" />
          </Col>
          <Col xs={6} className="column">
            <h1 className="main-title">Chill & Relax</h1>
          </Col>
          <Col className="column">
            <p className="main-title">
              Total movies displayed: {filteredMovies.length}
            </p>
          </Col>
        </Row>
      </Container>

      <input
        className="searchbar"
        type="text"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        placeholder="Movies Name"
      />

      <div>
        {["all", "classic", "horror", "comedy", "drama"].map((genre) => (
          <Button
            className="Button"
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{ fontWeight: selectedGenre === genre ? "bold" : "normal" }}
          >
            {genre}
          </Button>
        ))}
      </div>

      {loading ? (
        <>
          <div className="d-flex justify-content-center my-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <br />
          </div>
          <div>
            <h1 className="loading">I am loading be patient</h1>
          </div>
        </>
      ) : filteredMovies.length === 0 ? (
        <h1>No Movies found.</h1>
      ) : (
        <MoviesCardGroup movies={filteredMovies} />
      )}
    </div>
  );
}

export default Home;
