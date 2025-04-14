'use client';
import {useState} from "react";

export default function WhyRef()
{
    let [counter,setCounter] = useState(0);
    let [another,setAnother] = useState(0);
    console.log('Render WhyRef counter ',counter, ' Another ',another);
    return (<div>
        <h3>{counter}</h3>
        <button type={"button"} onClick={()=>setCounter(counter+1)}>
            &nbsp;    + &nbsp;
        </button>
        <button type={"button"} onClick={()=>setAnother(another+1)}>
            &nbsp;    Inc Another &nbsp;
        </button>
    </div>)
}