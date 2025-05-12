import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";
import {BASE_URL} from "@/lib/Config";



interface AuthSliceState{
    token?: string,
}
const initialState: AuthSliceState = {
    token:''
};
export interface LoginRequest
{
    username:string;
    password:string;
}
export const authSlice = createAppSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: (create) => ({

        logout: create.reducer((state) => {
            state.token = '';
        }),

        login: create.asyncThunk(
            async (loginRequest: LoginRequest,thunkApi) => {
                //console.log('ThunkApi ',thunkApi);

                const response = await fetch( BASE_URL+`/api/users/login`,{
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method:"POST",
                    body:JSON.stringify(loginRequest),
                });
                const json = await response.json();
                //console.log('login response ',json);
                if(!json.token)
                {
                    //console.log('Invalid token case ',json);
                    return thunkApi.rejectWithValue(json);
                }
                else
                {
                    return json;
                }

            },
            {
                pending: (state) => {

                },
                fulfilled: (state, action) => {
                    console.log('fulfilled case ');
                    state.token = action.payload?.token;

                },
                rejected: (state) => {
                    console.log('reject case');
                    state.token ='';
                    throw new Error('Invalid login')
                },
            },
        ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectAuth: (state) => state.token,
    },
});
export const { login,logout } = authSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectAuth } = authSlice.selectors;