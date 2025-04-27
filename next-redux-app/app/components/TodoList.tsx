
import Todo from "@/app/components/Todo";

type TodoListProp = {
    todos:Todo[]
}
export default function TodoList({todos}:TodoListProp)
{
    return(<div>
        Todolist item
    </div>)
}
