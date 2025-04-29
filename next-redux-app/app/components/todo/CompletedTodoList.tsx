'use client';
import {useAppSelector} from "@/lib/hooks";
import {selectAllCompleteTodo} from "@/lib/features/todo/todoSlice";

export default function CompletedTodoList()
{
    const completedTodo = useAppSelector(selectAllCompleteTodo);
    return(<div>
        <h1> All Completed {completedTodo.length}</h1>
    </div>);
}