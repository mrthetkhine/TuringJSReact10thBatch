import {Review} from "../types/movies";
import axiosInstance from "../axiosInstance";

export async function getAllReviewByMovieId(movieId:string):Promise<Review[]>
{
    const moviesResponse = await axiosInstance.get<Review[]>(`/api/reviews/movies/${movieId}`);
    let movie= await moviesResponse.data;
    return movie;
}