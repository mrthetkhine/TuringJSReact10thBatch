const Movie = require('./../models/Movie');
async function getAllMovies() {
    return Movie.find();
}
async function getMovieById(id) {
    return Movie.findById(id);
}
const searchMovieByTitle = async(movieTitle)=>
{
    const movies = await Movie.find({
        title: {
            $regex:movieTitle
        }
    });
    return  movies;
}
const searchMovieByYear = async(year)=>
{
    const movies = await Movie.find({
        year: year
    });
    return  movies;
}
async function saveMovie(movie) {
    let newMovie = new Movie(movie);
    return newMovie.save();
}
async function updateMovieById(id,movie) {
    let oldMovie = await Movie.findById(id);
    if(!oldMovie)
    {
        throw new Error(`Could not find movie with id ${id}`);
    }
    return Movie.findByIdAndUpdate(id,movie,{new:true});
}
async function deleteMovieById(id) {
    let oldMovie = await Movie.findById(id);
    if(!oldMovie)
    {
        throw new Error(`Could not find movie with id ${id}`);
    }
    return Movie.findByIdAndDelete(id);
}
module.exports = {
    getAllMovies,
    getMovieById,
    searchMovieByTitle,
    searchMovieByYear,
    saveMovie,
    updateMovieById,
    deleteMovieById,
}
