import {useState} from "react";

import {Box, Button} from "@mui/material";
import ReviewDialog from "@/app/movies/components/ReviewDialog";


interface ReviewEntryProp
{
    movieId:string
}
export default function ReviewEntry({movieId}:ReviewEntryProp)
{

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(<div>
        <ReviewDialog handleClose={handleClose} open={open} movieId={movieId}/>

        <Box component="section">
            <Button variant="contained" onClick={handleClickOpen}>New Review</Button>

        </Box>
    </div>);
}