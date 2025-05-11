var express = require('express');
var router = express.Router();
const reviews = require('../controller/ReviewController');


router.get('/', reviews.getAllReviews);
router.get('/movies/:movieId', reviews.getAllReviewsByMovieId);
router.post('/',reviews.saveReview);
router.put('/:id',reviews.updateReview);
router.delete('/:id',reviews.deleteReview);
module.exports = router;