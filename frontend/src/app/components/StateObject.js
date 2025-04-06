'use client';
import {useState} from "react";

export default function StateObject()
{
    let [profile,setProfile] = useState({
        name: 'Someone',
        address:'YGN'
    })
    const addressChangeHandler = (event)=>{
       //profile.address= "Another";
        console.log('event ',event);
        setProfile({
            ...profile,
            address: 'ANother',
        })
    }
    return (<div>
        <button onClick={addressChangeHandler} type={"button"}>Update</button>
        <div>Name {profile.name}</div>
        <div>Address {profile.address}</div>
    </div>)
}