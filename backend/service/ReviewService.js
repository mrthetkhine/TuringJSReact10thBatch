const Reviews = require('../models/Review');
const mongoose = require("mongoose");

async function waitFor(ms)
{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}
const getAllReviews = async () => {
    return Reviews.find();
}
const getReviewById = async(reviewId)=>{

    return Reviews.findById(reviewId);//.populate("movie");
}
const getReviewByMovieId = async(movieId)=>{
    //await waitFor(5000);
    return Reviews.find({movie:movieId});//.populate("movie");
}
const saveReview = async(review)=>{
    const newReview = new Reviews({
        movie: new mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review,

    });

    await newReview.save();
    return newReview;
    //return newReview.populate('movie');
}
const updateReview = async(reviewId,review)=>{
    review.movie = new mongoose.Types.ObjectId(review.movie);
    //console.log('Review Id ',reviewId, ' Review ',review);
    const updatedReview = await Reviews.findByIdAndUpdate(reviewId, review,{new: true});
    return updatedReview;//.populate("movie");
}
const deleteReviewById = async(id)=>{
    let review = await Reviews.findById(id);
    if(!review){
        throw new Error(`Review id ${id} not found`);
    }
    return Reviews.findByIdAndDelete(id);
}
module.exports = {
    getAllReviews,
    getReviewByMovieId,
    saveReview,
    updateReview,
    deleteReviewById,
}