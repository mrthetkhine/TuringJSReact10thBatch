'use client';

import {useForm} from "react-hook-form";

import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";

import {useRouter, redirect, useSearchParams} from "next/navigation";

import {zodResolver} from "@hookform/resolvers/zod";
import {LoginFormValue, loginSchema} from "../../schema/loginShema";
import {useActionState, useEffect, useState} from "react";

import {login} from "../../lib/authActions";

const initialState = {
    success: "",
    errors: {
        username:"",
        password: "",
    }
};
export default function LoginForm()
{
    let router =useRouter();
    const searchParams = useSearchParams();
    //console.log('is login ',auth);

    const redirectUrl = searchParams.get('redirectUrl');

    //console.log('Auth ',auth);

    const { register, handleSubmit, control } = useForm<LoginFormValue>({
        resolver: zodResolver(loginSchema), // Integrate Zod for schema-based validation
        defaultValues: {
           username:'',
            password:''
        },
    });
    const [show,setShow] = useState(false);
    const handleClose =()=>{
        setShow(false);
    }
    const handleOpen = ()=>{
        setShow(true);
    }
    const btnNewHandler =()=>{
        console.log('Btn new handler');
        handleOpen();
    };
    const [state, loginAction, pending] = useActionState(login, initialState);
    console.log('state ',state);
    console.log('pending ',pending);


    return (<div>
        <Dialog
        fullWidth
        open={true}

        >
        <form action={loginAction}>
            <DialogTitle>
                Login
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>

                    <Grid size={12}>
                        <TextField

                            label="Username"
                            variant="standard"
                            fullWidth
                            {...register("username")}
                            error={!!state.errors?.username}
                            helperText={state.errors?.username}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField

                            label="Password"
                            variant="standard"
                            fullWidth
                            {...register("password")}
                            type="password"
                            error={!!state.errors?.password}
                            helperText={state.errors?.password}
                        />
                    </Grid>


                </Grid>
            </DialogContent>
            <DialogActions>

                <Button type="submit">Login</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </form>
        </Dialog>
    </div>);
}