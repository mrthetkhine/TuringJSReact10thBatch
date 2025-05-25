'use client';

import {Movie} from "../../../types/movies";
import MovieUI from "./MovieUI";
import {Button, Grid} from "@mui/material";
import {useRouter} from "next/navigation";
import ConfirmationDialog from "@/app/components/ConfirmationDialog";
import {useState} from "react";
import {useMutationDeleteMovieById} from "@/app/hooks/movieHook";
interface MovieListProp{
    movies:Movie[]
}
export default function MovieList({movies}:MovieListProp)
{
    const router =useRouter();
    const [movieToDelete,setMovieToDelete] = useState<Movie|null>(null);
    const {mutate:deleteMovieById,isSuccess,isError} = useMutationDeleteMovieById();


    const btnDetailHandler= (movie:Movie)=>{
        router.push(`/movies/${movie._id}`);
    }


    const [open, setOpen] = useState(false);

    const confirmHandler =()=>{
        console.log('Confirm delete ',movieToDelete?._id);
        deleteMovieById(movieToDelete!);

    };
    const cancelHandler =()=>{
        console.log('Cancel');
    }
    const showConfirmDialog = (movie:Movie) => {
        setOpen(true);
        setMovieToDelete(movie);

    };

    const handleClose = (newValue?: string) => {
        setOpen(false);

    };
    return(<div>
        <ConfirmationDialog
            id="ringtone-menu"
            keepMounted
            title={"Delete movie"}
            message={"Are you sure you want to delete with title "+movieToDelete?.title}
            open={open}
            onClose={handleClose}
            okCallBack={confirmHandler}
            cancelCallBack={cancelHandler}
        />
        <Grid container spacing={2}
              sx={{ flexGrow: 1 }}
              size={{ xs: 6, md: 8 }}>
        {
            movies.map(movie=> <Grid size ={10} key={movie._id}>
                    <MovieUI
                        movie={movie}>

                    </MovieUI>
                <Button type={"submit"}
                        variant={"contained"}
                        onClick={()=>showConfirmDialog(movie)} >Delete</Button>
                &nbsp;
                <Button type={"submit"}
                        variant={"contained"}
                        onClick={()=>btnDetailHandler(movie)} >Details</Button>
                </Grid>
               )
        }
        </Grid>
    </div>);
}