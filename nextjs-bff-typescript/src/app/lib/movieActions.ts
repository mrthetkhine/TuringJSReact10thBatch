'use server'
import {Movie} from "../types/movies";
import {deleteMovie, saveMovie, updateMovie} from "../api/movieApi";
import {revalidatePath} from "next/cache";
import {z} from "zod";
import {movieSchema} from "../schema/movieSchema";

export async function saveOrUpdateMovie(prevState:any, formData: FormData):Promise<any>
{
    console.log('Form data ',formData);
    const movieFormData = Object.fromEntries(formData);
    console.log('Movie form data ',movieFormData);


    const validateMovieForm = movieSchema.safeParse(movieFormData);

    let id = formData.get("_id") as string;
    let title = formData.get("title") as string??'';
    let year = +(formData.get("year") as string ??'0');
    let director = formData.get("director")as string ??'';
    let phoneNo = formData.get("phoneNo")as string??'';
    let movie:Movie = {
        _id:id,
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
        if(id)//update
        {
            let updatedMovie = await updateMovie(movie);
            console.log('Form data in update movies',movie);
            revalidatePath(`/movies/${updatedMovie._id}`);
            return updatedMovie;
        }
        else
        {
            delete movie._id;
            let savedMovie = await saveMovie(movie);
            console.log('Form data in create movies',movie);
            revalidatePath('/movies');
            return savedMovie;
        }

    }
}

export async function deleteMovieAction(movieId:string):Promise<any>
{
    let deletedMovie = await deleteMovie(movieId);
    revalidatePath('/movies');
    return deletedMovie;
}