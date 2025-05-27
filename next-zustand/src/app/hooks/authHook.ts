import { useQuery} from "@tanstack/react-query";
import LoginUser, {LoginResponse} from "@/types/auth";
import {apiLogin} from "@/app/hooks/api/authApi";


export const useLogin = (user:LoginUser)=>{
    return useQuery({
        queryKey:['auth'],
        queryFn: ()=>apiLogin(user),

    });
}