'use client';
import { useParams, useRouter} from "next/navigation";
import React, {useState} from "react";

import {Button,  Grid} from "@mui/material";
import MovieUI from "@/app/movies/components/MovieUI";
import {useMovieById} from "@/app/hooks/movieHook";
import {Movie} from "@/types/movies";
import MovieDialog from "@/app/movies/components/MovieDialog";
import ReviewEntry from "@/app/movies/components/ReviewEntry";
import {useLoadReviewByMovieId} from "@/app/hooks/reviewHook";
import ReviewList from "@/app/movies/components/ReviewList";
import IsAuth from "@/app/hooks/IsAuth";

 function MovieDetailsPage({
                                             params,
                                         }: {
                                            params: Promise<{ id: string }>
                                        })
{
    const {id} = useParams<{ id: string }>();
    const router =useRouter();
    const {movie} = useMovieById(id);

    const { data:reviews,isSuccess } =  useLoadReviewByMovieId(id);
    console.log('Movie returned from useMovieById ',movie);
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
            <MovieDialog handleClose={handleClose} open={open} movieToEdit={movie??{}as Movie}/>
            <Button  variant="contained" onClick={btnEditHandler} sx={{padding:1}}>Edit</Button>
            <Grid>

                <MovieUI
                    movie={movie??{}as Movie}
                />
            </Grid>
            <Grid>
                <ReviewEntry movieId={movie?._id??''}/>
            </Grid>
            <Grid>
                {
                    isSuccess && reviews && <ReviewList reviews={reviews}/>
                }
            </Grid>
            <Button  variant="contained" onClick={btnBackHandler} >Back</Button>

        </Grid>

    </div>);
}
export default IsAuth(MovieDetailsPage);