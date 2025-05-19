import {getAllReviewByMovieId} from "../../api/reviewApi";
import ReviewUI from "./ReviewUI";

interface ReviewFeedProps
{
    movieId:string;
}
export default async function ReviewFeed({movieId}:ReviewFeedProps)
{
    let reviews = await getAllReviewByMovieId(movieId);
    //console.log('Review done ',reviews);
    return(<div>
        {
            reviews.map(review=><ReviewUI key={review._id}
                review={review}/>)
        }
    </div>)
}