'use client';
import {useRouter} from "next/navigation";
import MovieList from "@/app/movies/components/MovieList";
import {Movie} from "@/app/types/movies";

let movies:Movie[] =[
    {
        "_id": "67ea93a4084313d7bdd11488",
        "title": "Avata",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "67ea93a4084313d7bdd11489"
        },
        "year": 2010,

    },
    {
        "_id": "67ea9400084313d7bdd1148b",
        "title": "Inception",
        "director": {
            "name": "Cristhoper Nolan",
            "phoneNo": "09993",
            "_id": "67ea9400084313d7bdd1148c"
        },
        "year": 2010,

    }
]
export default function MoviesPage()
{
    return(<MovieList movies={movies}/>);
}