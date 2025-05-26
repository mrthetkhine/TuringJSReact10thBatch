import {Movie} from "../../../types/movies";
import axiosInstance from "../../axiosInstance";

export async function apiLoadAllMovies():Promise<Movie[]>
{
    const moviesResponse =  await axiosInstance.get<Movie[]>('/api/movies');
    return moviesResponse.data;
}
export async function apiSaveMovie(movie:Partial<Movie>):Promise<Movie>{
    const moviesResponse =  await axiosInstance.post<Movie>(`/api/movies`,movie);
    return moviesResponse.data;
}
export async function apiUpdateMovie(movie:Partial<Movie>):Promise<Movie>{
    const moviesResponse =  await axiosInstance.put<Movie>(`/api/movies/${movie._id}`,movie);
    return moviesResponse.data;
}
export async function apiDeleteMovieById(movieId:string):Promise<Movie>{
    const moviesResponse =  await axiosInstance.delete<Movie>(`/api/movies/${movieId}`);
    return moviesResponse.data;
}