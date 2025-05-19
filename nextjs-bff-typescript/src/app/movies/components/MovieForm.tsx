'use client';
import {Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import Link from "next/link";
import {saveOrUpdateMovie} from "../../lib/movieActions";
import {useActionState, useEffect, useState} from "react";
import {Movie} from "../../types/movies";
import {useForm} from "react-hook-form";
import {MovieFormValue, movieSchema} from "../../schema/movieSchema";
import {zodResolver} from "@hookform/resolvers/zod";

const initialState = {
    success: "",
    errors: {
        _id:"",
        title: "",
        year: "",
        director:"",
        phoneNo:"",
    }
};
interface MovieFormProp{
    movieToEdit?:Movie,
    show:boolean,
    handleClose:()=>void,

}
export default function MovieForm({movieToEdit,show,handleClose}:MovieFormProp)
{
    const { register, handleSubmit, control } = useForm<MovieFormValue>({
        resolver: zodResolver(movieSchema), // Integrate Zod for schema-based validation
        defaultValues: {
            _id:movieToEdit?._id??"",
            title:movieToEdit?.title??"",
            year:movieToEdit?.year??0,
            director: movieToEdit?.director?.name??"",
            phoneNo: movieToEdit?.director?.phoneNo??"",
        },
    });
    const [state, createMovieAction, pending] = useActionState(saveOrUpdateMovie, initialState);
    console.log('state ',state);
    console.log('pending ',pending);

    useEffect(()=>{
        console.log('Run effect ', state);
        if(!state.errors)
        {
            handleClose();
        }
    });

    return (<div>

        <Dialog   fullWidth
                  open={show}>
            <form action={createMovieAction}>

                <DialogTitle>
                    {movieToEdit?'Edit Move':'New Movie'}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <input type={"hidden"}  {...register("_id")}/>
                        <Grid size={12}>
                            <TextField

                                label="Title"
                                variant="standard"
                                fullWidth
                                {...register("title")}
                                error={!!state.errors?.title}
                                helperText={state.errors?.title}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                label="Year"
                                variant="standard"
                                fullWidth
                                {...register("year")}
                                error={!!state.errors?.year}
                                helperText={state.errors?.year}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                label="Director"
                                variant="standard"
                                fullWidth
                                {...register("director")}
                                error={!!state.errors?.director}
                                helperText={state.errors?.director}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                label="PhoneNo"
                                variant="standard"
                                fullWidth
                                {...register("phoneNo")}
                                error={!!state.errors?.phoneNo}
                                helperText={state.errors?.phoneNo}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>

                    <Button type="submit" disabled={pending}>
                        {movieToEdit?'Update':'Save'}
                    </Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>

    </div>);
}