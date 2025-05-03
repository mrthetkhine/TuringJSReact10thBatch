'use client';
import {
    Todo,
    useCreateTodoMutation, useDeleteTodoMutation,
    useGetTodosQuery,
    useUpdateTodoMutation
} from "@/lib/features/todo-api/todoApiSlice";
import {useAppDispatch} from "@/lib/hooks";
import {useState} from "react";


function TodoItem({todo}:{todo:Todo}) {
    let [updateTodo,result] = useUpdateTodoMutation();
    let [deleteTodo,deleteTodoResult] = useDeleteTodoMutation();
    let [text,setText] = useState(todo.title);
    let [editing,setEditing] = useState(false);

    const onEditHandler = ()=>{

        setEditing(!editing);
        if(editing)
        {
            let updateTask = {
                ...todo,
                title: text
            }
            console.log('Update ',updateTask);
            //dispatch(updateTodo(updateTask));
            updateTodo(updateTask);
        }
    }
    const onDeleteHandler = ()=>{
        deleteTodo(todo._id);
    }
    return <div>
        {
            editing?<input type={"text"}
                           value={text}
                           onChange={(event)=>setText(event.target.value)}/>:text
        }

        &nbsp;
        <button type={"button"} onClick={onEditHandler}>{!editing?'Edit':'Save'}</button>
        &nbsp;
        <button type={"button"} onClick={onDeleteHandler}>Delete</button>
    </div>;
}

let id=4;
export function TaskEntry()
{
    const [createTodo, result] = useCreateTodoMutation();
    let [task,setTask] = useState('');
    const addHandler = ()=>{
        //onAdd(task);
        console.log('on add task ',task);
        let newTodo:Todo = {
            _id:id++,
            title: task,
            completed:false,
        }
        createTodo(newTodo);
        setTask('');
    }
    return(<div>
        <input type={"text"}

               value={task} onChange={(event)=>setTask(event.target.value)}/>
        &nbsp;
        <button type={"button"} onClick={addHandler}>Add</button>
    </div>);
}
export function TodoList({todos}:{todos:Todo[]})
{
    return(<div>
        {
            todos.map(todo=><TodoItem todo={todo} key={todo._id}/>)
        }
    </div>);
}
export default function TodoListWithRTKQuery()
{
    const { data, isError, isLoading, isSuccess } = useGetTodosQuery(undefined);
    return (<div>
        <TaskEntry/>
        {
            isLoading && <h3>Loading....</h3>
        }
        {
            !isError && data && <TodoList todos={data}/>
        }
    </div>);
}