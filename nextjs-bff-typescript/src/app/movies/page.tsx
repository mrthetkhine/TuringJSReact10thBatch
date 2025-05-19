import MovieUI from "./components/MovieUI";
import {Button, Typography} from "@mui/material";
import Link from "next/link";
import axiosInstance from "../axiosInstance";
import {Movie} from "../types/movies";
import {getAllMovies} from "../api/movieApi";
import MovieForm from "./components/MovieForm";
import DeleteMovieForm from "./components/DeleteMovieForm";
import NewMovieForm from "./components/NewMovieForm";

export default async function MoviesPage()
{
    let movies = await getAllMovies();
    return(<div>
        <NewMovieForm/>
        {
            movies && movies.map(movie=><div key={movie._id!}>
                <MovieUI

                movie={movie}>

            </MovieUI>
                <DeleteMovieForm movieId={movie._id!}/>
                &nbsp;
                <Link

                    href={`/movies/${movie._id!}`}
                >
                    <Button variant="contained">Details</Button>
                </Link>
            </div>)
        }
    </div>)
}