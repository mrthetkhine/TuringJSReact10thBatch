import {Movie} from "@/app/types/movies";
import MovieUI from './Movie';
interface MovieProps{
    movies:Movie[]
}

export default function MovieList({movies}:MovieProps)
{
    return(<div>
        {
            movies.map(movie=><MovieUI
                movie={movie}
                key={movie._id}/>)
        }
    </div>);
}