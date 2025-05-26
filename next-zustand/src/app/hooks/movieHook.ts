import { useMutation, useQuery} from "@tanstack/react-query";
import {apiDeleteMovieById, apiLoadAllMovies, apiSaveMovie, apiUpdateMovie} from "@/app/hooks/api/movieApi";
import {queryClient} from "@/app/hooks/queryClient";
import {Review} from "@/types/movies";

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
    console.log('Use Movie by Id ',movieId);
    const data = queryClient.getQueryData<Review[]>(['movies'])??[];
    return {
        movie:data?.filter((movie:Review)=>movie._id===movieId)[0]
    }
}
//use optimistic update
export const useMutationDeleteMovieById = ()=>{
    return useMutation({
        mutationFn: (movie:Review) => apiDeleteMovieById(movie._id!),
        onMutate:(movie:Review)=>{
          console.log('On Mutate ',movie._id);
          const oldState:Review[] = queryClient.getQueryData(['movies'])??[];

          queryClient.setQueryData(['movies'], (oldState:Review[]) => oldState.filter(m=>m._id!=movie._id))

          return {oldState};//context
        },
        onSuccess: async (deletedMovie:Review) => {
            console.log("I'm onSuccess! ",deletedMovie);

            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            //queryClient.setQueryData(['movies'], (oldState:Movie[]) => oldState.filter(m=>m._id!=deletedMovie._id))
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
        onError: (err, movie:Review, context:{oldState:Review[]}) => {
            queryClient.setQueryData(['movies'], context.oldState);
        },
    });
}
//use pessimistic update
export const useMutationSaveMovie = ()=>{
    return useMutation({
        mutationFn: (movie:Partial<Review>) => {
            delete movie?.director?._id;
            delete movie?._id;
            return apiSaveMovie(movie);
        },
        onSuccess: async (savedMovie:Review) => {
            console.log("I'm onSuccess! ",savedMovie);
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(['movies'], (oldState:Review[]) => [...oldState,savedMovie])
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
    });
}
//use pessimistic update
export const useMutationUpdateMovie = ()=>{
    return useMutation({
        mutationFn: (movie:Partial<Review>) => {
            return apiUpdateMovie(movie);
        },
        onSuccess: async (updateMovie:Review) => {
            console.log("I'm onSuccess! ",updateMovie);
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(['movies'],
                (oldState:Review[]) => oldState.map(movie=>movie._id==updateMovie._id?updateMovie:movie));
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
    });
}