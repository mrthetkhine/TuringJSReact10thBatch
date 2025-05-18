'use server'
import {movieSchema} from "../schema/movieSchema";
import {loginSchema} from "../schema/loginShema";
import {saveMovie, updateMovie} from "../api/movieApi";
import {revalidatePath} from "next/cache";
import {loginApi} from "../api/authApi";
import {redirect} from "next/navigation";

export async function login(prevState:any, formData: FormData):Promise<any>
{
    console.log('login form data ',formData);
    const loginFormData = Object.fromEntries(formData);
    console.log('Login form data ',loginFormData);
    const validateLoginForm = loginSchema.safeParse(loginFormData);
    let username = formData.get("username")??'';
    let password = formData.get("password")??'';
    let user = {
        username,
        password,
    }
    if(!validateLoginForm.success)
    {
        //console.log('Error ',validateMovieForm.error)
        const formFieldErrors = validateLoginForm.error.flatten().fieldErrors;
        return {
            errors: {
                username: formFieldErrors?.username,
                password: formFieldErrors?.password,


            },
        };
    }
    else
    {
        let authResult = await loginApi(user);
        console.log('auth result ',authResult);
        if(authResult['token'])
        {
            redirect('/movies');
        }

        return authResult;

    }
}