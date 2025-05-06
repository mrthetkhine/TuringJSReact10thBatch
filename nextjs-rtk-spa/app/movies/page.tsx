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

let movies:Movie[] =[

]

export default function MoviesPage()
{
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllMovieQuery(undefined,{

    });
    return(<div>
        <MovieEntry/>

        {
            data && !isError && <MovieList movies={data}/>
        }
    </div>);
}