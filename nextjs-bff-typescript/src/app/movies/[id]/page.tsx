import { Suspense } from 'react'
import {Button, CircularProgress} from "@mui/material";
import Link from "next/link";
import EditMovieForm from "../components/EditMovieForm";
import {getAllReviewByMovieId} from "../../api/reviewApi";
import MovieFeed from "../components/MovieFeed";
import ReviewFeed from "../components/ReviewFeed";

export default async function MoviesDetailsPage({params}: { params: Promise<{ id: string }> })
{
    let {id} = await params;
    console.log('Id ',id);

    return (<section>
        <Suspense fallback={<CircularProgress />}>
            <MovieFeed movieId={id}/>
        </Suspense>
        <Suspense fallback={<CircularProgress />}>
            <ReviewFeed movieId={id} />
        </Suspense>

              {/*  &nbsp;*/}
                <Link

                    href={`/movies`}
                >
                    <Button variant="contained">Back</Button>
                </Link>
    </section>);
}