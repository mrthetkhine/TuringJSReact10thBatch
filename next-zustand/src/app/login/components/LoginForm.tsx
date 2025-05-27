import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";

import {useRouter, redirect, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {useMutationSaveMovie} from "@/app/hooks/movieHook";
import {useLogin} from "@/app/hooks/authHook";
import LoginUser, {LoginResponse} from "@/types/auth";
import {useBoundStore} from "@/stores/useBoundStore";

const loginSchema = yup.object({
    username: yup.string().required('User required'),
    password: yup.string().required('Password required'),

}).required();
export default function LoginForm()
{

    const searchParams = useSearchParams();
    //console.log('is login ',auth);

    const redirectUrl = searchParams.get('redirectUrl');

    const {auth,login} = useBoundStore();
    //console.log('zustand Login ',auth);
 /*
    const auth = useAppSelector(selectAuth);*/
    //console.log('Auth ',auth);
    useEffect(()=>{
        if(auth.token)
        {
            if(redirectUrl)
            {
                redirect(redirectUrl);
            }
            else
            {
                redirect('/');

            }

        }
    },[]);
    const { register, handleSubmit, reset,formState:{ errors } } = useForm({

        resolver: yupResolver(loginSchema)
    });
    const onSubmit = (data:LoginUser) => {
        console.log(data);
        login(data).then((data:LoginResponse)=>{
            //console.log('Login successful ',data);
            if(data.token)
            {
                if(redirectUrl)
                {
                    redirect(redirectUrl);
                }
                else
                {
                    redirect('/');

                }
            }
            else
            {
                reset({});
            }
        })

    }
    return (<div>
        <Dialog
        fullWidth
        open={true}

        >
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>
                Login
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>

                    <Grid size={12}>
                        <TextField
                            {...register("username")}
                            label="Username"
                            variant="standard"
                            fullWidth
                            error={!!errors.username}
                            helperText={errors.username?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("password")}
                            label="Password"
                            variant="standard"
                            fullWidth
                            type="password"
                            error={!!errors.password}
                            helperText={errors.password?.message}/>
                    </Grid>


                </Grid>
            </DialogContent>
            <DialogActions>

                <Button type="submit">Login</Button>
            </DialogActions>
        </form>
        </Dialog>
    </div>);
}