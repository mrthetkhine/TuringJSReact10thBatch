import { useMutation, useQuery} from "@tanstack/react-query";
import {apiDeleteMovieById, apiLoadAllMovies, apiSaveMovie, apiUpdateMovie} from "@/app/hooks/api/movieApi";
import {queryClient} from "@/app/hooks/queryClient";
import {Movie} from "@/types/movies";

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
    const data = queryClient.getQueryData<Movie[]>(['movies'])??[];
    return {
        movie:data?.filter((movie:Movie)=>movie._id===movieId)[0]
    }
}
//use optimistic update
export const useMutationDeleteMovieById = ()=>{
    return useMutation({
        mutationFn: (movie:Movie) => apiDeleteMovieById(movie._id!),
        onMutate:(movie:Movie)=>{
          console.log('On Mutate ',movie._id);
          const oldState:Movie[] = queryClient.getQueryData(['movies'])??[];

          queryClient.setQueryData(['movies'], (oldState:Movie[]) => oldState.filter(m=>m._id!=movie._id))

          return {oldState};//context
        },
        onSuccess: async (deletedMovie:Movie) => {
            console.log("I'm onSuccess! ",deletedMovie);

            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            //queryClient.setQueryData(['movies'], (oldState:Movie[]) => oldState.filter(m=>m._id!=deletedMovie._id))
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
        onError: (err, movie:Movie, context?:{oldState:Movie[]}) => {
            queryClient.setQueryData(['movies'], context?.oldState);
        },
    });
}
//use pessimistic update
export const useMutationSaveMovie = ()=>{
    return useMutation({
        mutationFn: (movie:Partial<Movie>) => {
            delete movie?.director?._id;
            delete movie?._id;
            return apiSaveMovie(movie);
        },
        onSuccess: async (savedMovie:Movie) => {
            console.log("I'm onSuccess! ",savedMovie);
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(['movies'], (oldState:Movie[]) => [...oldState,savedMovie])
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
    });
}
//use pessimistic update
export const useMutationUpdateMovie = ()=>{
    return useMutation({
        mutationFn: (movie:Partial<Movie>) => {
            return apiUpdateMovie(movie);
        },
        onSuccess: async (updateMovie:Movie) => {
            console.log("I'm onSuccess! ",updateMovie);
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(['movies'],
                (oldState:Movie[]) => oldState.map(movie=>movie._id==updateMovie._id?updateMovie:movie));
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
    });
}