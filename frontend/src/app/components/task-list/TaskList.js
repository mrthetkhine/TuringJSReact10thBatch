'use client';
import {useState} from "react";
import * as PropTypes from "prop-types";

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];

export function TaskItem({task,onEdit,onDelete}) {
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
            onEdit(updateTask);
        }
    }
    const onDeleteHandler = ()=>{
        onDelete(task);
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

TaskItem.propTypes = {task: PropTypes.any};
export function TaskEntry({onAdd})
{
    let [task,setTask] = useState('');
    const addHandler = (event)=>{
        onAdd(task);
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
export default function TaskList()
{
    let [tasks,setTasks] =useState(initialTasks);
    const onAddHandler = (text)=>{
        console.log('Parent add task ',text);
        let task= newTask(text);
        setTasks([...tasks,task]);
    }
    const onEditHandler = (updateTask)=>{
        console.log('Update task in parent ',updateTask);
        let newTask = tasks.map(task=>task.id==updateTask.id?updateTask:task);
        setTasks( newTask);
    }
    const onDeleteHandler = (deleteTask)=>{
        console.log('Delete task in parent ',deleteTask);
    }
    return (<div>
        <TaskEntry onAdd={onAddHandler}/>
        {
            tasks.map(task=><TaskItem key={task.id}
                                      task={task}
                                        onEdit={onEditHandler}
                                        onDelete={onDeleteHandler}/>)
        }
    </div>);
}