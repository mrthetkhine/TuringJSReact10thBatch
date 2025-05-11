import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Movie} from "@/app/types/movies";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";

const loginSchema = yup.object({
    username: yup.string().required('User required'),
    password: yup.string().required('Password required'),

}).required();
export default function LoginForm()
{
    const { register, handleSubmit, formState:{ errors } } = useForm({

        resolver: yupResolver(loginSchema)
    });
    const onSubmit = (data:any) => {
        console.log(data);


    }
    return (<div>
        <Dialog
        fullWidth
        open={open}

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