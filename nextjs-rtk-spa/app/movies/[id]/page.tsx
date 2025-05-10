'use client';
import {redirect, useParams, useRouter} from "next/navigation";
import React, {useState} from "react";
import {useGetAllMovieQuery} from "@/lib/features/movie/movieApiSlice";
import MovieUI from "@/app/movies/components/Movie";
import {Button, Grid} from "@mui/material";
import {Movie} from "@/app/types/movies";
import MovieDialog from "@/app/movies/components/MovieDialog";

export default function MovieDetailsPage({
                                             params,
                                         }: {
                                            params: Promise<{ id: string }>
                                        })
{
    const {id} = useParams<{ id: string }>()
    let router =useRouter();
    const { movie } = useGetAllMovieQuery(undefined, {
        selectFromResult: ({ data }) => ({
            movie: data?.find((item) => item._id === id),
        }),
    })
    const btnEditHandler=()=>{
        console.log('Edit movie ',movie);
        handleClickOpen();
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const btnBackHandler =()=>{
        router.push('/movies');
    };
    return (<div>
        <MovieDialog handleClose={handleClose} open={open} movieToEdit={movie??{}as Movie}/>
        <Button  variant="contained" onClick={btnEditHandler} sx={{padding:2}}>Edit</Button>
            <Grid>

                <MovieUI
                    movie={movie??{}as Movie}
                />
            </Grid>
        <Button  variant="contained" onClick={btnBackHandler} sx={{padding:2}}>Back</Button>

    </div>);
}