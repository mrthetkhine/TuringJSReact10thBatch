'use client';

import {useGetTodosQuery} from "@/lib/features/todo-api/todoApiSlice";
import {TodoList} from "@/app/components/todo/TodoListWithRTKQuery";

export default function Page()
{
    const { data, isError, isLoading, isSuccess } = useGetTodosQuery(undefined);
    return(<div>
        {
            isLoading && <h3>Loading....</h3>
        }
        {
            !isError && data && <h1> Todo count{data.length}</h1>
        }
    </div>)

}