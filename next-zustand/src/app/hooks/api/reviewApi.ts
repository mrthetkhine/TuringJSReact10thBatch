import axiosInstance from "../../axiosInstance";
import Review from "@/types/review";


export async function apiLoadAllReviewByMovieId(movieId:string):Promise<Review[]>
{
    const reviewResponse =  await axiosInstance.get<Review[]>(`/api/reviews/movies/${movieId}`);
    return reviewResponse.data;
}
export async function apiSaveReview(review:Partial<Review>):Promise<Review>{
    const reviewResponse =  await axiosInstance.post<Review>(`/api/reviews`,review);
    return reviewResponse.data;
}
export async function apiDeleteReview(review:Partial<Review>):Promise<Review>{
    const reviewResponse =  await axiosInstance.delete<Review>(`/api/reviews/${review._id}`);
    return reviewResponse.data;
}