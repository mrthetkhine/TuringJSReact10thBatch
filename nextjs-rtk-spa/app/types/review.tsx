import {Movie} from "@/app/types/movies";

export default interface Review
{
    _id:string;
    rating:number;
    review:string;
    movie:string;

}