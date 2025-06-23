
import axiosInstance from "@/app/axiosInstance";
import LoginUser, {LoginResponse} from "@/types/auth";
//update
export async function apiLogin(user:LoginUser):Promise<LoginResponse>{
    const reviewResponse =  await axiosInstance.post<LoginResponse>(`/api/users/login`,user);
    return reviewResponse.data;
}