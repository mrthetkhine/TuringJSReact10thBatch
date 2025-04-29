import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {quotesApiSlice} from "@/lib/features/quotes/quotesApiSlice";
export interface Todo {
    _id: number;
    title: string;
    completed: boolean;
}
export const todosApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    reducerPath: "todosApi",
    endpoints: (build) => ({
        getTodos: build.query<Todo[], undefined>({
            query: () => `/todos`,
        }),
    }),
});
export const { useGetTodosQuery } = todosApiSlice;