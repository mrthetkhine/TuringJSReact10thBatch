'use server'
import {Movie} from "../types/movies";
import {deleteMovie, saveMovie} from "../api/MovieApi";
import {revalidatePath} from "next/cache";
import {z} from "zod";
import {movieSchema} from "../schema/movieSchema";

export async function createMovie(prevState:any,formData: FormData):Promise<any>
{
    console.log('Form data ',formData);
    const movieFormData = Object.fromEntries(formData);
    console.log('Movie form data ',movieFormData);

    const validateMovieForm = movieSchema.safeParse(movieFormData);

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
    if(!validateMovieForm.success)
    {
        //console.log('Error ',validateMovieForm.error)
        const formFieldErrors = validateMovieForm.error.flatten().fieldErrors;
        return {
            errors: {
                title: formFieldErrors?.title,
                year: formFieldErrors?.year,
                director: formFieldErrors?.director,
                phoneNo: formFieldErrors?.phoneNo,

            },
        };
    }
    else
    {
        let savedMovie = await saveMovie(movie);
        console.log('Form data in create movies',movie);
        revalidatePath('/movies');
        return savedMovie;
    }
}

export async function deleteMovieAction(movieId:string):Promise<any>
{
    let deletedMovie = await deleteMovie(movieId);
    revalidatePath('/movies');
    return deletedMovie;
}