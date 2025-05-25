'use client';
import { useParams, useRouter} from "next/navigation";
import React, {useState} from "react";

import {Button, Card, Grid} from "@mui/material";
import MovieUI from "@/app/movies/components/MovieUI";
import {useMovieById} from "@/app/hooks/movieHook";
import {Movie} from "@/types/movies";

export default function MovieDetailsPage({
                                             params,
                                         }: {
                                            params: Promise<{ id: string }>
                                        })
{
    const {id} = useParams<{ id: string }>();
    let router =useRouter();
    const {movie} = useMovieById(id);
    console.log('Movie ',movie);
    const btnEditHandler=()=>{
        console.log('Edit movie ');
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
        <Grid sx={{ pt:5,mt:2,mb:3,p:2 }}>
            <Button  variant="contained" onClick={btnEditHandler} sx={{padding:1}}>Edit</Button>
            <Grid>

                <MovieUI
                    movie={movie??{}as Movie}
                />
            </Grid>
            <Grid>

            </Grid>
            <Grid>

            </Grid>
            <Button  variant="contained" onClick={btnBackHandler} >Back</Button>

        </Grid>

    </div>);
}
