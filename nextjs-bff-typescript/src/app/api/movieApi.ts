import axiosInstance from "../axiosInstance";
import {Movie} from "../types/movies";

export async function getAllMovies():Promise<Movie[]>
{
    const moviesResponse = await axiosInstance.get<Movie[]>('/api/movies');
    let movies:Movie[] = await moviesResponse.data;
    return movies;
}
export async function getMovieById(movieId:string):Promise<Movie>
{
    const moviesResponse = await axiosInstance.get<Movie>(`/api/movies/${movieId}`);
    let movie= await moviesResponse.data;
    return movie;
}
export async function saveMovie(movie:Movie):Promise<Movie>
{
    const moviesResponse = await axiosInstance.post<Movie>(`/api/movies`,movie);
    let savedMovie= await moviesResponse.data;
    return savedMovie;
}
export async function updateMovie(movie:Movie):Promise<Movie>
{
    const moviesResponse = await axiosInstance.put<Movie>(`/api/movies/${movie._id}`,movie);
    let updatedMovie= await moviesResponse.data;
    return updatedMovie;
}
export async function deleteMovie(movieId:string):Promise<Movie>
{
    const moviesResponse = await axiosInstance.delete<Movie>(`/api/movies/${movieId}`);
    let deletedMovie= await moviesResponse.data;
    return deletedMovie;
}