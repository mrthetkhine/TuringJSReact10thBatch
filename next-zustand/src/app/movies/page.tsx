'use client';
import MovieList from "./components/MovieList";
import {useMovies} from "@/app/hooks/movieHook";
import IsAuth from "@/app/hooks/IsAuth";


 function MoviesPage()
{
    const { data:movies, isPending, isFetching,isSuccess } =  useMovies();

    //console.log('MoviesPage', movies);
    return(<div>
        {isSuccess && <MovieList movies={movies}/>}
    </div>);
}
export default IsAuth(MoviesPage);