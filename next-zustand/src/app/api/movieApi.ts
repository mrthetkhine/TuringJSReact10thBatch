import {Movie} from "../../types/movies";
import  { AxiosResponse } from 'axios';
import axiosInstance from "../axiosInstance";

export async function apiLoadAllMovies():Promise<Movie[]>
{
    let moviesResponse =  await axiosInstance.get<Movie[]>('/api/movies');
    let movies=  moviesResponse.data;
    return movies;
}