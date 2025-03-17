var express = require('express');
const movie = require('../controller/MovieController');
var router = express.Router();

router.get('/', movie.getAllMovies);
router.get('/:id', movie.getMovieById);
router.get('/title/:title',movie.findMoviesByTitle);
router.get('/year/:year',movie.findMoviesByYear);
router.post('/', movie.saveMovie);
router.put('/:id', movie.updateMovie);
router.delete('/:id', movie.deleteMovie);
module.exports = router;