import * as yup from "yup";
import {Movie} from "@/app/types/movies";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Rating, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";
import Review from "@/app/types/review";
import {useSaveReviewMutation} from "@/lib/features/review/reviewApiSlice";

const reviewSchema = yup.object({
    _id:yup.string(),
    review: yup.string().required('Review required'),
    rating: yup.number().positive().integer(),
    movie:yup.string()
}).required();
interface ReviewDialogProps{
    open:boolean,
    handleClose:()=>void,
    movieId:string,
}
export default function ReviewDialog({open,handleClose,movieId}:ReviewDialogProps)
{
    let [saveReview,saveReviewResult] = useSaveReviewMutation();
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(reviewSchema)
    });
    const [rating, setRating] = useState<number|null>(0);
    const onSubmit = (data:any) => {
        data.rating = rating;
        console.log(data);
        let review:Review = data;
        review.movie = movieId;
        saveReview(review);
        handleClose();

    }
    return(<Dialog
        fullWidth
        open={open}
        onClose={handleClose}

    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>
                New Review
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <input type={"hidden"}
                               {...register("_id")}

                        />
                        <input type={"hidden"}
                               {...register("movie")}

                        />
                    </Grid>
                    <Grid>
                        <Rating

                            name="hover-feedback"
                            value={rating}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}

                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("review")}
                            label="Review"
                            variant="standard"
                            fullWidth
                            error={!!errors.review}
                            helperText={errors.review?.message}/>
                    </Grid>


                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
            </DialogActions>
        </form>
    </Dialog>)
}