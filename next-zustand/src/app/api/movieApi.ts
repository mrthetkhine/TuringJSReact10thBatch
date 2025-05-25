import {Movie} from "../../types/movies";
import axiosInstance from "../axiosInstance";

export async function apiLoadAllMovies():Promise<Movie[]>
{
    const moviesResponse =  await axiosInstance.get<Movie[]>('/api/movies');
    return moviesResponse.data;
}
export async function apiDeleteMovieById(movieId:string):Promise<Movie>{
    const moviesResponse =  await axiosInstance.delete<Movie>(`/api/movies/${movieId}`);
    return moviesResponse.data;
}