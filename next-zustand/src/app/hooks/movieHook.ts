import {QueryCache, useMutation, useQuery} from "@tanstack/react-query";
import {apiDeleteMovieById, apiLoadAllMovies} from "../api/movieApi";
import {queryClient} from "@/app/hooks/queryClient";
import {Movie} from "@/types/movies";

const queryCache = new QueryCache({
    onError: (error) => {
        console.log(error)
    },
    onSuccess: (data) => {
        console.log(data)
    },
    onSettled: (data, error) => {
        console.log(data, error)
    },
})
export const useMovies =()=>{
    return useQuery({
        queryKey:['movies'],
        queryFn:apiLoadAllMovies,
        refetchOnWindowFocus: false,
    })
}
/*
export const useMovieById   =(movieId:string)=>{
    const { data:movies=[],isSuccess } =  useMovies();
    return {
        data:movies.filter(movie => movie._id === movieId),
        isSuccess:isSuccess,
    };
}*/
export const useMovieById   =(movieId:string)=>{
    const data = queryClient.getQueryData<Movie[]>(['movies'])??[];
    return {
        movie:data?.filter((movie:Movie)=>movie._id===movieId)[0]
    }
}
export const useMutationDeleteMovieById = ()=>{
    return useMutation({
        mutationFn: (movie:Movie) => apiDeleteMovieById(movie._id),
        onSuccess: async () => {
            console.log("I'm onSuccess!")
            queryClient.invalidateQueries({ queryKey: ['movies'] })
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
    });
}