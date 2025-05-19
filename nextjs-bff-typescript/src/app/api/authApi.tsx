import {Movie} from "../types/movies";
import axiosInstance from "../axiosInstance";
import {LoginFormValue} from "../schema/loginShema";

export async function loginApi(user:any)
{
    const loginResponse = await axiosInstance.post<any>(`/api/users/login`,user);
    let result = await loginResponse.data;
    //console.log('Login result ',result);
    return result;
}