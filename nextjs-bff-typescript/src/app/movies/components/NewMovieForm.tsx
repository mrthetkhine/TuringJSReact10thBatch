'use client';

import {Button} from "@mui/material";
import {useState} from "react";
import MovieForm from "./MovieForm";

export default function NewMovieForm()
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
    return(
        <div>
            <Button type="button" onClick={handleOpen} variant="contained">New Movie</Button>
            <MovieForm show={show} handleClose={handleClose}/>
        </div>);

}