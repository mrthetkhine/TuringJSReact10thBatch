const movieService = require('../service/MovieService');

async function getAllMovies(req, res) {
    try
    {
        console.log("Login user ",req.user);
        let movies = await movieService.getAllMovies();
        res.status(200).json(movies);
    }
    catch(err){
        res.status(500).json({
            errorMessage: err.toString()
        })
    }

}
async function getMovieById(req, res) {
    try
    {
        let id = req.params.id;
        let movies = await movieService.getMovieById(id);
        res.status(200).json(movies);
    }
    catch(err){
        res.status(404).json({
            errorMessage: err.toString()
        })
    }

}
const findMoviesByTitle =async (req,res)=>{
    try
    {
        let title = req.params['title'];
        let movies = await movieService.searchMovieByTitle(title);
        res.status(200).json(movies);
    }
    catch (err) {
        res.status(404).json({
            errorMessage: err.toString()
        })
    }
}
const findMoviesByYear = async (req,res)=>{
    try
    {
        let year = req.params['year'];
        let movies = await movieService.searchMovieByYear(year);
        res.status(200).json(movies);
    }
    catch (err) {
        res.status(404).json({
            errorMessage: err.toString()
        })
    }
}
async function saveMovie(req, res) {
    try
    {
        console.log('Save movie ',req.body);
        let movie = await movieService.saveMovie(req.body);
        res.status(201).json(movie);
    }
    catch(err){
        res.status(400).json({
            errorMessage: err.toString()
        })
    }

}
async function updateMovie(req, res) {
    try
    {
        let id = req.params.id;
        let movie = await movieService.updateMovieById(id,req.body);
        res.status(200).json(movie);
    }
    catch(err){
        res.status(400).json({
            errorMessage: err.toString()
        })
    }

}
async function deleteMovie(req, res) {
    try
    {
        let id = req.params.id;
        let movie = await movieService.deleteMovieById(id);
        res.status(200).json(movie);
    }
    catch(err){
        res.status(400).json({
            errorMessage: err.toString()
        })
    }

}
module.exports = {
    getAllMovies,
    getMovieById,
    findMoviesByTitle,
    findMoviesByYear,
    saveMovie,
    updateMovie,
    deleteMovie,
}