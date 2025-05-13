import Image from 'next/image'

import {Button, Card, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

import {Movie} from "../../types/movies";


interface MovieProp
{
    movie:Movie;
}
export default function MovieUI({movie}:MovieProp)
{


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

        </Card>


    </div>);
}