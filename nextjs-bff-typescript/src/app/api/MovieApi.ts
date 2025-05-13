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
export async function saveMovie(movie:object):Promise<Movie>
{
    const moviesResponse = await axiosInstance.post<Movie>(`/api/movies`,movie);
    let savedMovie= await moviesResponse.data;
    return savedMovie;
}