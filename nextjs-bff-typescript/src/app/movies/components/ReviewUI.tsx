
import {Box, Button, Card, Rating} from "@mui/material";
import React from "react";
import {Review} from "../../types/movies";

interface ReviewProp{
    review:Review
}
export default function ReviewUI({review}:ReviewProp)
{
    return(<Card sx={{mt:2,mb:2,p:2}}>

        <div>
            <Rating name="half-rating"
                    defaultValue={review.rating} precision={0.5} readOnly/>
        </div>
        <div> {review.review}</div>

    </Card>)
}