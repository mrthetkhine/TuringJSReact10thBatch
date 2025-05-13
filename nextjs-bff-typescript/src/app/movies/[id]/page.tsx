import {getMovieById} from "../../api/MovieApi";
import MovieUI from "../components/MovieUI";
import {Button} from "@mui/material";
import Link from "next/link";

export default async function MoviesDetailsPage({params}: { params: Promise<{ id: string }> })
{
    let {id} = await params;
    console.log('Id ',id);
    let movie = await getMovieById(id);
    return (<div>
            <MovieUI movie={movie}/>
        <Link

            href={`/movies`}
        >
            <Button variant="contained">Back</Button>
        </Link>
    </div>);
}