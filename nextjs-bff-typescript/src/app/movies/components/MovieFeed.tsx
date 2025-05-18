import {getMovieById} from "../../api/movieApi";
import MovieUI from "./MovieUI";
import EditMovieForm from "./EditMovieForm";

interface MovieFeedProps
{
    movieId:string;
}
export default async function MovieFeed({movieId}:MovieFeedProps)
{
    let movie = await getMovieById(movieId);
    console.log('Movie done ',movie);
    return(<div>
        <MovieUI movie={movie}/>
        <EditMovieForm movie={movie}/>
    </div>)
}