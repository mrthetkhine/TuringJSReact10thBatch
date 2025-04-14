'use client';

import {useContext, useReducer, useState} from "react";
import {taskListReducer} from "../task-list/TaskListWithReducer";
import TaskListContext from "./TaskListContext";
import TaskListDispatcherContext from "./TaskListDispatcherContext";
import TaskListCount from "./TaskListCount";


let nextId = 3;
let initState = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];
export function TaskItem({task}) {
    const dispatch = useContext(TaskListDispatcherContext);
    let [text,setText] = useState(task.text);
    let [editing,setEditing] = useState(false);


    const onEditHandler = ()=>{

        setEditing(!editing);
        if(editing)
        {
            let updateTask = {
                ...task,
                text: text
            }
            console.log('Update ',updateTask);
            //onEdit(updateTask);
            dispatch({
                type:"UPDATE_TODO",
                payload: updateTask
            })
        }
    }
    const onDeleteHandler = ()=>{
        //onDelete(task);
        dispatch({
            type:"DELETE_TODO",
            payload: task
        })
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
function TaskEntry()
{
    const dispatch = useContext(TaskListDispatcherContext);
    let [task,setTask] = useState('');
    const addHandler = (event)=>{
        let payload = newTask(task);
        dispatch({
            type:'ADD_TODO',
            payload,
        })
        setTask('');
    }
    return(<div>
        <input type={"text"}

               value={task} onChange={(event)=>setTask(event.target.value)}/>
        &nbsp;
        <button type={"button"} onClick={addHandler}>Add</button>
    </div>);
}
function newTask(title)
{
    return {
        id:nextId++,
        text:title,
        done:true,
    }
}
function TaskList()
{
    const tasks = useContext(TaskListContext);
    return(
       <div>
           {
               tasks.map(task=><TaskItem key={task.id}
                                         task={task}
                                        />)
           }
       </div>);

}
export default function TaskListWithContextReducer()
{
    const [tasks,dispatch] = useReducer(taskListReducer,initState);
    return(<div>
        <TaskListContext.Provider value={tasks}>
            <TaskListDispatcherContext.Provider value={dispatch}>
                <TaskEntry/>
                <TaskList/>
                <TaskListCount/>
            </TaskListDispatcherContext.Provider>
        </TaskListContext.Provider>
    </div>)
}