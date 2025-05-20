'use client';
import {useBoundStore} from "../../stores/useBoundStore";

export default function TodoList()
{
    const {todos} = useBoundStore();
    return (<div>
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>);
}