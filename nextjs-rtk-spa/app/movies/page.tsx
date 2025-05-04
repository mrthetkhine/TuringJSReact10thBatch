'use client';
import {useRouter} from "next/navigation";

export default function MoviesPage()
{
    const router = useRouter();
    let movies = ['Avata','Titanic','Matrix']
    let btnDetailsHandler = (index)=>{
        console.log('Go to movie ',index);
        router.push(`/movies/${index}`);
    }
    return(<div>
        Movies page
        {
            movies.map((movie,index)=><div key={index}>
                {movie}
                <button type={"button"} onClick={()=>btnDetailsHandler(index)}>Details</button>
            </div>)
        }
    </div>);
}