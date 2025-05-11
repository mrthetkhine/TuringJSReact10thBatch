import Review from "@/app/types/review";
import {Box, Button, Card, Rating} from "@mui/material";
import React from "react";

interface ReviewProp{
    review:Review
}
export default function ReviewUI({review}:ReviewProp)
{
    return(<div >

        <div>
            <Rating name="half-rating"
                    defaultValue={review.rating} precision={0.5} readOnly/>
        </div>
        <div> {review.review}</div>

    </div>)
}