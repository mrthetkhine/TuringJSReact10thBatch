'use client';
import {useReducer, useState} from "react";
import {TaskEntry, TaskItem} from "./TaskList";
import useCustomReducer from "../hook/useCustomReducer";

let nextId = 3;
let initState = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];

export function taskListReducer(state,action)
{
    switch (action.type)
    {
        case 'ADD_TODO':
            return [...state,action.payload];
        case 'UPDATE_TODO':
            return state.map(task=>task.id==action.payload.id?action.payload:task);
        case 'DELETE_TODO':
            return state.filter(task=>task.id!=action.payload.id);
    }
}

function newTask(title)
{
    return {
        id:nextId++,
        text:title,
        done:true,
    }
}
export default function TaskListWithReducer()
{
    let [tasks,dispatch] = useCustomReducer(taskListReducer,initState);
    const onAddHandler = (text)=>{
        console.log('Parent add task ',text);
        let task= newTask(text);
        dispatch({
            type:'ADD_TODO',
            payload :task,
        })
    }
    const onEditHandler = (updateTask)=>{
        console.log('Update task in parent ',updateTask);
        dispatch({
            type:'UPDATE_TODO',
            payload: updateTask
        })
    }
    const onDeleteHandler = (deleteTask)=>{
        console.log('Delete task in parent ',deleteTask);
        dispatch({
            type:'DELETE_TODO',
            payload: deleteTask
        })
    }
    return(<div>
        <TaskEntry onAdd={onAddHandler}/>
        {
            tasks.map(task=><TaskItem key={task.id}
                                      task={task}
                                      onEdit={onEditHandler}
                                      onDelete={onDeleteHandler}/>)

        }
    </div>)
}