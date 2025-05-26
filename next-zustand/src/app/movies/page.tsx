'use client';
import MovieList from "./components/MovieList";
import {useMovies} from "@/app/hooks/movieHook";

export default function MoviesPage()
{
    const { data:movies, isPending, isFetching,isSuccess } =  useMovies();
    return(<div>
        {isSuccess && <MovieList movies={movies}/>}
    </div>);
}