import MovieUI from "./components/MovieUI";
import {Button, Typography} from "@mui/material";
import Link from "next/link";
import axiosInstance from "../axiosInstance";
import {Movie} from "../types/movies";
import {getAllMovies} from "../api/MovieApi";

export default async function MoviesPage()
{
    let movies = await getAllMovies();
    return(<div>
        <Link

            href={`/movies/new`}
        >
            <Button variant="contained">New Movie</Button>
        </Link>
        {
            movies && movies.map(movie=><div key={movie._id}>
                <MovieUI

                movie={movie}>

            </MovieUI>
                <Link

                    href={`/movies/${movie._id}`}
                >
                    <Button variant="contained">Details</Button>
                </Link>
            </div>)
        }
    </div>)
}