import {useContext} from "react";
import TaskListContext from "./TaskListContext";

export default function TaskListCount()
{
    const tasks = useContext(TaskListContext);
    return (<div>
        <h1>No of task {tasks.length} </h1>
    </div>)
}