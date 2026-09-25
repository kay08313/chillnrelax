const moviesUrl = [
  "https://api.sampleapis.com/movies/classic",
  "https://api.sampleapis.com/movies/horror",
  "https://api.sampleapis.com/movies/comedy",
  "https://api.sampleapis.com/movies/drama",
];

async function fetchapi(url) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);

    return [];
  }
}

async function movies() {
  let allMovies = [];

  for (let i = 0; i < moviesUrl.length; i++) {
    const data = await fetchapi(moviesUrl[i]);
    // Add genre property manually based on URL or index
    const genre = moviesUrl[i].split("/").pop(); // 'classic', 'horror', etc.
    const tagged = data.map((movie) => ({ ...movie, genre }));
    allMovies = allMovies.concat(tagged);
  }

  return allMovies;
}

export default movies;
