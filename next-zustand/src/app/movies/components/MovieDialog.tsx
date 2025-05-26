import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from "yup";

import {Director, Review} from "@/types/movies";
import {useMutationSaveMovie, useMutationUpdateMovie} from "@/app/hooks/movieHook";

const movieSchema = yup.object({
    _id:yup.string().optional(),
    title: yup.string().required('Title required'),
    year: yup.number().positive().integer().required(),
    director: yup.object().shape({
        _id:yup.string().optional(),
        name: yup.string().required('Director name is required'),
        phoneNo: yup.string().required('Director phoneNo is required')
    }),
}).required();
interface MovieDialogProps{
    open:boolean,
    handleClose:()=>void,
    movieToEdit?:Review,
}
export default function MovieDialog({open,handleClose,movieToEdit}:MovieDialogProps)
{
    const {mutate:saveMovie} = useMutationSaveMovie();
    const {mutate:updateMovie} = useMutationUpdateMovie();
    const defaultDirector:Director  ={
        _id:'',
        name:'',
        phoneNo:'',
    }
    const defaultValues : Review = {
        _id:movieToEdit?._id??'',
        title:movieToEdit?.title??'',
        year:movieToEdit?.year??0,
        director:movieToEdit?.director??defaultDirector,
    };

    const { register, handleSubmit, formState:{ errors } } = useForm({
        defaultValues,
        resolver: yupResolver(movieSchema)
    });
    const onSubmit = (data:never) => {
        console.log(data);
        const movie:Review = data;

        if(!movieToEdit)
        {

            console.log('Savemovie');
            saveMovie(movie,{
                onSuccess:()=> handleClose(),
            })
        }
        else {
            updateMovie(movie,{
                onSuccess:()=> handleClose(),
            });
            console.log('update movie');
        }


    }
    return(<Dialog
        fullWidth
        open={open}
        onClose={handleClose}

    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>
                {movieToEdit?'Edit Movie':'New Movie'}
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <input type={"hidden"}
                            {...register("_id")}

                            />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("title")}
                            label="Title"
                            variant="standard"
                            fullWidth
                            error={!!errors.title}
                            helperText={errors.title?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("year")}
                            label="Year"
                            variant="standard"
                            fullWidth
                            error={!!errors.year}
                            helperText={errors.year?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("director.name")}
                            label="Director Name"
                            variant="standard"
                            fullWidth
                            error={!!errors.director?.name}
                            helperText={errors.director?.name?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("director.phoneNo")}
                            label="Director PhoneNo"
                            variant="standard"
                            fullWidth
                            error={!!errors.director?.phoneNo}
                            helperText={errors.director?.phoneNo?.message}/>
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
            </DialogActions>
        </form>
    </Dialog>)
}