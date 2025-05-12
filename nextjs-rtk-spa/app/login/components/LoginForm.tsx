import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Movie} from "@/app/types/movies";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {selectCount} from "@/lib/features/counter/counterSlice";
import {login, selectAuth} from "@/lib/features/auth/authSlice";
import {useRouter, redirect, useSearchParams} from "next/navigation";
import {useEffect} from "react";

const loginSchema = yup.object({
    username: yup.string().required('User required'),
    password: yup.string().required('Password required'),

}).required();
export default function LoginForm()
{
    let router =useRouter();
    const searchParams = useSearchParams();
    //console.log('is login ',auth);

    const redirectUrl = searchParams.get('redirectUrl');
    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    //console.log('Auth ',auth);
    useEffect(()=>{
        if(auth)
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
    const onSubmit = (data:any) => {
        console.log(data);
        dispatch(login(data))
            .then(success=>{
                console.log('Success ',success);
                if(redirectUrl)
                {
                    redirect(redirectUrl);
                }
                else
                {
                    redirect('/');

                }
            },error=>{
                console.log('Error ',error);
                reset({});
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