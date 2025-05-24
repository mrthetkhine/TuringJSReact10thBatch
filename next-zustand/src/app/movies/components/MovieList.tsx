'use client';

import {Movie} from "../../../types/movies";
import MovieUI from "./MovieUI";
interface MovieListProp{
    movies:Movie[]
}
export default function MovieList({movies}:MovieListProp)
{

    return(<div>
        Movie List
        {
            movies.map(movie=><MovieUI key={movie._id}
                        movie={movie}>

            </MovieUI>)
        }
    </div>);
}