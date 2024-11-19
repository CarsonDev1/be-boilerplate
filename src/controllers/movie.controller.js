const tmdbService = require('../services/tmdb.service');

const getPopularMovies = async (req, res) => {
  try {
    const movies = await tmdbService.getPopularMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching popular movies' });
  }
};

const searchMovies = async (req, res) => {
  const { query } = req.query;
  try {
    const movies = await tmdbService.searchMovies(query);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error searching movies' });
  }
};

const getMovieDetails = async (req, res) => {
  const { movieId } = req.params;
  try {
    const movie = await tmdbService.getMovieDetails(movieId);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movie details' });
  }
};

const getMovieGenres = async (req, res) => {
  try {
    const genres = await tmdbService.getMovieGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movie genres' });
  }
};

module.exports = {
  getPopularMovies,
  searchMovies,
  getMovieDetails,
  getMovieGenres,
};
