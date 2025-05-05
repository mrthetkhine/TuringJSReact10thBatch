import Image from 'next/image'
import {Movie} from "@/app/types/movies";
import {Button, Card, CardHeader} from "@mui/material";
import {useRouter} from "next/navigation";


interface MovieProp
{
    movie:Movie;
}
export default function Movie({movie}:MovieProp)
{
    let router =useRouter();
    const btnDetailHandler= ()=>{
        router.push(`/movies/${movie._id}`);
    }
    return(<div>
        <Card sx={{ pb:2,mt:2,mb:3,p:2 }}>
            <CardHeader

                title={movie.title}

            />
            <Image src={"https://m.media-amazon.com/images/M/MV5BMTk3MjE5NDctOWJkMS00YzA0LTg0NTEtM2IzY2Q2MGZlODYwXkEyXkFqcGc@._V1_QL75_UX1640_.jpg"}
                   width={150}
                   height={250}
                   alt={"Movie poster image"}
            />
            <div>{movie.year}</div>
            <Button variant="contained" onClick={btnDetailHandler}>Details</Button>
        </Card>


    </div>);
}