'use client';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Input, Grid,
} from "@mui/material";
import {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useSaveMovieMutation} from "@/lib/features/movie/movieApiSlice";
import {Movie} from "@/app/types/movies";
import MovieDialog from "@/app/movies/components/MovieDialog";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MovieEntry()
{

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return(<div>
        <MovieDialog handleClose={handleClose} open={open}/>

        <Box component="section" sx={{ p: 2}}>
            <Button variant="contained" onClick={handleClickOpen}>New Movie</Button>

        </Box>
    </div>);
}