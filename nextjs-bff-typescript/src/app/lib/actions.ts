'use server'
import {Movie} from "../types/movies";
import {saveMovie} from "../api/MovieApi";

export async function createMovie(prevState:any,formData: FormData):Promise<Movie>
{
    console.log('Form data ',formData);
    let title = formData.get("title")??'';
    let year = formData.get("year")??'';
    let director = formData.get("director")??'';
    let phoneNo = formData.get("phoneNo")??'';
    let movie = {
        title,
        year,
        director:{
            name: director,
            phoneNo:phoneNo
        }
    }
    let savedMovie = await saveMovie(movie);
    console.log('Form data in create movies',movie);
    return savedMovie;
}