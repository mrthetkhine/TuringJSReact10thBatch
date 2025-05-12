'use client';
import {useRouter} from "next/navigation";
import MovieList from "@/app/movies/components/MovieList";
import {Movie} from "@/app/types/movies";
import {
    Box,
    Button,
    Card,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Modal, TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import MovieEntry from "@/app/movies/components/MovieEntry";
import {useGetAllMovieQuery} from "@/lib/features/movie/movieApiSlice";
import IsAuth from "@/app/auth/IsAuth";

let movies:Movie[] =[

]

function MoviesPage()
{
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllMovieQuery(undefined,{

        //pollingInterval: 3000,
        //skipPollingIfUnfocused: true,

    });
    const btnRefreshHandler =()=>{
      console.log('Refresh');
      refetch();
    };
    return(<div>
        <MovieEntry/>
        <Button onClick={btnRefreshHandler}>Refresh</Button>
        {
            data && !isError && <MovieList movies={data}/>
        }
    </div>);
}
export default IsAuth(MoviesPage);