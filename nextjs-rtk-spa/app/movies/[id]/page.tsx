'use client';
import {redirect, useParams, useRouter} from "next/navigation";
import React, {useState} from "react";
import {useGetAllMovieQuery} from "@/lib/features/movie/movieApiSlice";
import MovieUI from "@/app/movies/components/Movie";
import {Button, Grid} from "@mui/material";
import {Movie} from "@/app/types/movies";
import MovieDialog from "@/app/movies/components/MovieDialog";
import {useGetReviewByMovieIdQuery} from "@/lib/features/review/reviewApiSlice";
import ReviewList from "@/app/movies/components/ReviewList";
import ReviewEntry from "@/app/movies/components/ReviewEntry";

export default function MovieDetailsPage({
                                             params,
                                         }: {
                                            params: Promise<{ id: string }>
                                        })
{
    const {id} = useParams<{ id: string }>();
    let router =useRouter();
    const { data:reviews, isError, isLoading, isSuccess,refetch } = useGetReviewByMovieIdQuery(id);
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
    const btnNewReviewHandler =()=>{
      console.log('New Review Handler');
    };
    return (<div>
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

    </div>);
}