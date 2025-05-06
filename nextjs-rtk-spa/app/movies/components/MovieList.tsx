import {Movie} from "@/app/types/movies";
import MovieUI from './Movie';
import {useRouter} from "next/navigation";
import React from "react";
import ConfirmationDialog from "@/app/components/ConfirmationDialog";
import {Button, Card} from "@mui/material";
interface MovieProps{
    movies:Movie[]
}

export default function MovieList({movies}:MovieProps)
{
    let router =useRouter();
    const btnDetailHandler= (movie:Movie)=>{
        router.push(`/movies/${movie._id}`);
    }
    const btnDeleteHandler = (movie:Movie)=>{
        console.log('delete click ',);
    };
    const [open, setOpen] = React.useState(false);

    const confirmHandler =()=>{
        console.log('Confirm');
    };
    const cancelHandler =()=>{
        console.log('Cancel');
    }
    const showConfirmDialog = () => {
        setOpen(true);
    };

    const handleClose = (newValue?: string) => {
        setOpen(false);

    };
    return(<div>
        <ConfirmationDialog
            id="ringtone-menu"
            keepMounted
            title={"Delete movie"}
            message={"Are you sure you want to delete"}
            open={open}
            onClose={handleClose}
            okCallBack={confirmHandler}
            cancelCallBack={cancelHandler}
        />
        {
            movies.map(movie=>{
                return <div key={movie._id}>
                    <MovieUI
                    movie={movie}
                    />
                    <Button variant="contained" onClick={()=>btnDetailHandler(movie)}>Details</Button>
                    &nbsp;
                    <Button variant="contained" onClick={showConfirmDialog}>Delete</Button>
                </div>
            })
        }
    </div>);
}