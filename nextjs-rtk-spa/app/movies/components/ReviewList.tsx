import Review from "@/app/types/review";
import React, {useState} from "react";
import ReviewUI from "@/app/movies/components/ReviewUI";
import {Button, Card} from "@mui/material";
import ConfirmationDialog from "@/app/components/ConfirmationDialog";
import {useDeleteReviewMutation} from "@/lib/features/review/reviewApiSlice";

interface ReviewListProp
{
    reviews:Review[]
}
export default function ReviewList({reviews}:ReviewListProp)
{
    let [deleteReviewApi,deletedReviewResult] = useDeleteReviewMutation();
    let [currentReview,setCurrentReview] = useState<null|Review>(null);
    const btnDeleteHandler = ()=>{
        console.log('Delete review');
    };
    const [open, setOpen] = useState(false);

    const confirmHandler =()=>{
        console.log('Confirm ',currentReview);
        deleteReviewApi(currentReview as Review)
            .then(data=>console.log('Successfully deleted'));
    };
    const cancelHandler =()=>{
        console.log('Cancel');
    }
    const showConfirmDialog = (review:Review) => {
        setOpen(true);
        setCurrentReview(review);
    };

    const handleClose = (newValue?: string) => {
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