'use server'
import {movieSchema} from "../schema/movieSchema";
import {loginSchema} from "../schema/loginShema";
import {saveMovie, updateMovie} from "../api/movieApi";
import {revalidatePath} from "next/cache";
import {loginApi} from "../api/authApi";
import {redirect} from "next/navigation";
import { cookies } from 'next/headers'

export async function login(prevState:any, formData: FormData):Promise<any>
{
    //console.log('login form data ',formData);
    const loginFormData = Object.fromEntries(formData);
    //console.log('Login form data ',loginFormData);
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
        let authResult = null;
        let redirectUrl = '';
        try {
            authResult= await loginApi(user);
            //console.log('auth result ',authResult);
            const cookieStore = await cookies()
            if(authResult.token)
            {
                let redirectUrlFromCookie = await cookieStore.get('redirectUrl');
                if(redirectUrlFromCookie?.value)
                {
                    redirectUrl= redirectUrlFromCookie?.value
                }
                else
                {
                    redirectUrl= '/';
                }
                //console.log('redirectUrlFromCookie ',redirectUrlFromCookie);
                cookieStore.set('auth-token',authResult.token,{
                    httpOnly:true,
                });
            }



            //return authResult;
        }
        catch (e)
        {
            redirectUrl = '/login';
            console.log('Error ',e);
            return {
                errors: {
                    username: 'Invalid username or password',
                },
            };
        }
        finally {
            redirect(redirectUrl);
        }
    }
}
export  async  function logoutAction()
{
    const cookieStore = await cookies()
    cookieStore.delete( 'auth-token');

    redirect('/login');
}