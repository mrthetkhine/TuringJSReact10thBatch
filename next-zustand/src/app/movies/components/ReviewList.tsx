
import React, {useState} from "react";

import {Button, Card} from "@mui/material";
import ConfirmationDialog from "@/app/components/ConfirmationDialog";
import Review from "@/types/review";
import ReviewUI from "@/app/movies/components/ReviewUI";
import {useDeleteReviewById} from "@/app/hooks/reviewHook";

interface ReviewListProp
{
    reviews:Review[]
}
export default function ReviewList({reviews}:ReviewListProp)
{
    const {mutate:deleteReview} = useDeleteReviewById();
    const [currentReview,setCurrentReview] = useState<null|Review>(null);
    const [open, setOpen] = useState(false);

    const confirmHandler =()=>{
        console.log('Confirm ',currentReview);
        deleteReview(currentReview as Review,{
            onSuccess:()=>handleClose(),
        })

    };
    const cancelHandler =()=>{
        console.log('Cancel');
    }
    const showConfirmDialog = (review:Review) => {
        setOpen(true);
        setCurrentReview(review);
    };

    const handleClose = () => {
        setOpen(false);

    };
    return(<div>
        <ConfirmationDialog
            id="ringtone-menu"
            keepMounted
            title={"Delete review"}
            message={"Are you sure you want to delete"}
            open={open}
            onClose={handleClose}
            okCallBack={confirmHandler}
            cancelCallBack={cancelHandler}
        />
            {
                reviews.map(review=><Card sx={{ pb:2,mt:2,mb:3,p:2 }} key={review._id}>
                            <ReviewUI
                            key={review._id}
                            review={review} />
                            <div>
                                <Button variant="contained" onClick={()=>showConfirmDialog(review)}>Delete Review</Button>
                            </div>

                </Card>)
            }
    </div>);
}