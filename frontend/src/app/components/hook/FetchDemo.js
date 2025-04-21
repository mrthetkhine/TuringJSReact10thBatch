'use client';

import {useEffect, useState} from "react";
import useFetch from "./useFetch";

export default function FetchDemo()
{
    let [loading,todos] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return(<div>
        {
         loading ?<h1>loading</h1>:   todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>)
}