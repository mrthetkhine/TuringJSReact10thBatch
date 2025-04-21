'use client';

import {useEffect, useState} from "react";

export default function TodoListWithFetch()
{
    let [todos,setTodos] = useState([]);

    useEffect(()=>{
        console.log('Efect one');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(resp=>resp.json())
            .then(json=>setTodos(json));

    },[]);
    useEffect(()=>{
       console.log('Effect two');
    });

    return(<div>
        {
            todos.map(todo=><div key={todo.id}>
                                {todo.title}
                            </div>)
        }
    </div>)
}