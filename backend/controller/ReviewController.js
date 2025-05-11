const reviewService = require("../service/ReviewService");
const getAllReviews = async (req, res) => {
    try
    {
        let reviews = await reviewService.getAllReviews();
        res.status(200).json(reviews);
    }
    catch(err)
    {
        res.status(500).json({
            errorMessage: err.toString()
        })
    }
}
const getAllReviewsByMovieId = async (req, res) => {
    try
    {
        let movieId = req.params.movieId;
        let reviews = await reviewService.getReviewByMovieId(movieId);
        res.status(200).json(reviews);
    }
    catch(err)
    {
        res.status(500).json({
            errorMessage: err.toString()
        })
    }
}
const saveReview = async (req, res) => {
    try
    {
        let review = await reviewService.saveReview(req.body);
        res.status(200).json(review);
    }
    catch(err)
    {
        res.status(500).json({
            errorMessage: err.toString()
        })
    }
}
const updateReview = async (req, res) => {
    try
    {
        let reviewId = req.params.id;
        let review = await reviewService.updateReview(reviewId, req.body);
        res.status(200).json(review);
    }
    catch(err)
    {
        res.status(500).json({
            errorMessage: err.toString()
        })
    }
}
const deleteReview = async (req, res) => {
    try
    {
        let reviewId = req.params.id;
        let review = await reviewService.deleteReviewById(reviewId);
        res.status(200).json(review);
    }
    catch(err)
    {
        res.status(500).json({
            errorMessage: err.toString()
        })
    }
}
module.exports = {
    getAllReviews,
    getAllReviewsByMovieId,
    saveReview,
    updateReview,
    deleteReview,

}