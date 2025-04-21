'use client';

import {useEffect, useState} from "react";
import useFetch from "./useFetch";

export default function FetchUser()
{
    let [loading,users] = useFetch('https://jsonplaceholder.typicode.com/users');

    return(<div>
        {
            loading?<h1>Loading</h1>: users.map(user=><div key={user.id}>
                {user.name}
            </div>)
        }
    </div>)
}