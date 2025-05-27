
import LoginUser, {LoginResponse} from "@/types/auth";
import {StateCreator} from "zustand/index";
import {MyState} from "@/stores/useBoundStore";
export interface AuthState {
    auth:{
        token: string;
    }

}
export interface AuthAction
{
    login:(user:LoginUser)=>Promise<LoginResponse>;
    logout:()=>void;
}
export type AuthSlice = AuthState & AuthAction;
export const defaultInitState:AuthState = {
    auth:{
        token: "",
    },
}
export const createAuthSlice:StateCreator<
    MyState,
    [['zustand/devtools', never]],
    [],
    AuthSlice
>= (set)=>({
    ...defaultInitState,
    login: async (user:LoginUser)=>{
        //console.log('Login Api');
        try {
            const response = await  fetch('http://localhost:3000/api/users/login',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(user),
            });
            const json = await response.json();
            //console.log('Auth Response ',json);
            if(json.token)
            {
                set( (state: AuthState) =>{
                    state.auth.token= json.token;
                    return state;
                });
                return json;
            }
            else
            {
                console.log('Auth error');
                set( (state: AuthState) =>{
                    state.auth.token= '';
                    return state;
                });
                return json;
            }

        }
        catch(error)
        {
            console.log('Auth error ',error);
            set( (state: AuthState) =>{
                state.auth.token= '';
                return state;
            });
        }

    },
    logout: () => set((state:AuthState) =>({
        auth:{
            token:''
        }
    }),undefined,'auth/logout')
});