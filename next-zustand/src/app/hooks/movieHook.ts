import {useQuery} from "@tanstack/react-query";
import {apiLoadAllMovies} from "../api/movieApi";

export const useMovies =()=>{
    return useQuery({
        queryKey:['movies'],
        queryFn:apiLoadAllMovies,
    })
}