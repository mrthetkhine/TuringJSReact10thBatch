'use client';
import {Todo, useGetTodosQuery} from "@/lib/features/todo-api/todoApiSlice";

export function TodoList({todos}:{todos:Todo[]})
{
    return(<div>
        {
            todos.map(todo=><div key={todo._id}>
                {todo.title}
            </div>)
        }
    </div>);
}
export default function TodoListWithRTKQuery()
{
    const { data, isError, isLoading, isSuccess } = useGetTodosQuery();
    return (<div>
        TodoListWithRTKQuery
        {
            !isError && data && <TodoList todos={data}/>
        }
    </div>);
}