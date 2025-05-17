'use client';

import {Button} from "@mui/material";
import Link from "next/link";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import {useState} from "react";
import {deleteMovieAction} from "../../lib/movieActions";

interface DeleteMovieFormProp  {
    movieId:string;
}
export default function DeleteMovieForm({movieId}:DeleteMovieFormProp)
{
    const [open, setOpen] = useState(false);

    const confirmHandler =()=>{
        console.log('Confirm delete ',movieId);
        deleteMovieAction(movieId);
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
    return(
        <span>
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
             <Button variant="contained" type={"button"} onClick={showConfirmDialog}>Delete</Button> &nbsp;
        </span>

    );
}