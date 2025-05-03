import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {quotesApiSlice} from "@/lib/features/quotes/quotesApiSlice";
export interface Todo {
    _id: number;
    title: string;
    completed: boolean;
}
export const todosApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    reducerPath: "todosApi",
    tagTypes: ['Todo'],
    endpoints: (build) => ({
        getTodos: build.query<Todo[], undefined>({
            query: () => `/todos`,
            providesTags:['Todo'],
        }),
        getTodoById: build.query<Todo, number>({
            query: (id:number) => `/todos/${id}`,
        }),
        createTodo:build.mutation<Todo,Todo>({
            query: (todo:Todo) => ({
                url: `todos`,
                method: 'POST',
                body: todo,
            }),
            invalidatesTags:['Todo'],
            transformResponse: (response: { data: Todo }, meta, arg) => response.data,
        }),
        updateTodo:build.mutation<Todo,Todo>({
            query: (todo:Todo) => ({
                url: `todos/${todo._id}`,
                method: 'PUT',
                body: todo,
            }),
            invalidatesTags:['Todo'],
            transformResponse: (response: { data: Todo }, meta, arg) => response.data,
        }),
        deleteTodo:build.mutation<Todo,number>({
            query: (todoId:number) => ({
                url: `todos/${todoId}`,
                method: 'DELETE',
            }),
            invalidatesTags:['Todo'],
            transformResponse: (response: { data: Todo }, meta, arg) => response.data,
        }),
    }),
});
export const { useGetTodosQuery,
                useGetTodoByIdQuery,
                useCreateTodoMutation,
                useUpdateTodoMutation,
                useDeleteTodoMutation} = todosApiSlice;