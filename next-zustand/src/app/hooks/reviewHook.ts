import {useMutation, useQuery} from "@tanstack/react-query";

import {apiDeleteReview, apiLoadAllReviewByMovieId, apiSaveReview} from "@/app/hooks/api/reviewApi";
import Review from "@/types/review";
import {queryClient} from "@/app/hooks/queryClient";

export const useLoadReviewByMovieId =(movieId:string)=>{
    return useQuery({
        queryKey:['reviews',movieId],
        queryFn:()=>apiLoadAllReviewByMovieId(movieId),
        refetchOnWindowFocus: false,
    })
}
//use pessimistic update
export const useSaveReview = ()=>{
    return useMutation({
        mutationFn: (review:Partial<Review>) => {
            delete review?._id;
            return apiSaveReview(review);
        },
        onSuccess: async (savedReview:Review) => {
            console.log("I'm onSuccess! ",savedReview);
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(['reviews',savedReview.movie], (oldState:Review[]) => [...oldState,savedReview])
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
    });
}
export const useDeleteReviewById = ()=>{
    return useMutation({
        mutationFn: (review:Review) => apiDeleteReview(review),
        onMutate:(review:Review)=>{
            console.log('On Mutate ',review._id);
            const oldState:Review[] = queryClient.getQueryData(['reviews',review.movie])??[];

            queryClient.setQueryData(['reviews',review.movie], (oldState:Review[]) => oldState.filter(m=>m._id!=review._id))

            return {oldState};//context
        },
        onSuccess: async (deletedReview:Review) => {
            console.log("I'm onSuccess! ",deletedReview);

            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            //queryClient.setQueryData(['movies'], (oldState:Movie[]) => oldState.filter(m=>m._id!=deletedMovie._id))
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
        onError: (err, review:Review, context?:{oldState:Review[]}) => {
            queryClient.setQueryData(['reviews',review.movie], context?.oldState);
        },
    });
}