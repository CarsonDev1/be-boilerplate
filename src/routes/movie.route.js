const express = require('express');
const movieController = require('../controllers/movie.controller');

const router = express.Router();

router.get('/popular', movieController.getPopularMovies);
router.get('/search', movieController.searchMovies);
router.get('/:movieId', movieController.getMovieDetails);
router.get('/genres', movieController.getMovieGenres);

module.exports = router;
