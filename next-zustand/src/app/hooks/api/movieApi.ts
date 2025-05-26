import {Review} from "../../../types/movies";
import axiosInstance from "../../axiosInstance";

export async function apiLoadAllMovies():Promise<Review[]>
{
    const moviesResponse =  await axiosInstance.get<Review[]>('/api/movies');
    return moviesResponse.data;
}
export async function apiSaveMovie(movie:Partial<Review>):Promise<Review>{
    const moviesResponse =  await axiosInstance.post<Review>(`/api/movies`,movie);
    return moviesResponse.data;
}
export async function apiUpdateMovie(movie:Partial<Review>):Promise<Review>{
    const moviesResponse =  await axiosInstance.put<Review>(`/api/movies/${movie._id}`,movie);
    return moviesResponse.data;
}
export async function apiDeleteMovieById(movieId:string):Promise<Review>{
    const moviesResponse =  await axiosInstance.delete<Review>(`/api/movies/${movieId}`);
    return moviesResponse.data;
}