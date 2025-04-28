'use client';
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {selectTodo} from "@/lib/features/todo/todoSlice";


export default function TodoListWithRedux()
{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodo);
    return (<div>
        Todolist
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>);
}