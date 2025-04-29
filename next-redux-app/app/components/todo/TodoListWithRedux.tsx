'use client';
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {
    addTodo,
    deleteTodo,
    loadAllTodos,
    selectAllCompleteTodo,
    selectTodo,
    TodoModel,
    updateTodo
} from "@/lib/features/todo/todoSlice";
import {useEffect, useState} from "react";


function TaskItem({todo}:{todo:TodoModel}) {
    const dispatch = useAppDispatch();
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
            dispatch(updateTodo(updateTask));
        }
    }
    const onDeleteHandler = ()=>{
        dispatch(deleteTodo(todo));
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
    const dispatch = useAppDispatch();
    let [task,setTask] = useState('');
    const addHandler = (event)=>{
        //onAdd(task);
        console.log('on add task ',task);
        let newTodo:TodoModel = {
            id:id++,
            title: task,
            completed:false,
        }
        dispatch(addTodo(newTodo));
        setTask('');
    }
    return(<div>
        <input type={"text"}

               value={task} onChange={(event)=>setTask(event.target.value)}/>
        &nbsp;
        <button type={"button"} onClick={addHandler}>Add</button>
    </div>);
}
export default function TodoListWithRedux()
{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodo);

    useEffect(()=>{
        dispatch(loadAllTodos());
    },[]);
    return (<div>

        <TaskEntry/>
        {
            todos.map(todo=><TaskItem key={todo.id}
                                          todo={todo}/>)
        }
    </div>);
}