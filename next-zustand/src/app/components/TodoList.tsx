'use client';
import {useBoundStore} from "../../stores/useBoundStore";
import {Button} from "@mui/material";
import {Todo} from "../../stores/todos/todo-slice";
import {useEffect} from "react";

let id=2;
function newTodo():Todo
{
    id++;
    return {
        id:id,
        title: 'Task '+id,
        completed:true,
    }
}
export default function TodoList()
{
    const {todos,loadAllTodo,addTodo,deleteTodo,fetchTodos} = useBoundStore();
    //loadAllTodo();
    useEffect(()=>{
       /* fetch('https://jsonplaceholder.typicode.com/todos')
            .then(resp=>resp.json())
            .then(json=>{
               let todos:Todo[] = (json as Todo[]);
               loadAllTodo(todos);
            });*/
        fetchTodos();

    },[]);
    return (<div>
        <Button type={"submit"}
                variant={"contained"}
                onClick={()=>addTodo(newTodo())} >Add</Button>
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
                <Button type={"submit"}
                        variant={"contained"}
                        onClick={()=>deleteTodo(todo)} >Delete</Button>
            </div>)
        }
    </div>);
}