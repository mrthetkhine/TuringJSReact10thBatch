'use client';
import {Button} from "@mui/material";
import {Movie} from "../../types/movies";
import {useState} from "react";
import MovieForm from "./MovieForm";

interface EditMovieFormProp {
    movie:Movie
}
export default function EditMovieForm({movie}:EditMovieFormProp)
{
    const [show,setShow] = useState(false);
    const handleClose =()=>{
        setShow(false);
    }
    const handleOpen = ()=>{
        setShow(true);
    }
    const btnNewHandler =()=>{
        console.log('Btn new handler');
        handleOpen();
    };
    return(<>
        <Button variant="contained" type={"button"} onClick={handleOpen}>
            Edit
        </Button>
        <MovieForm show={show} handleClose={handleClose} movieToEdit={movie}/>
    </>)
}