'use client';
import {useRef, useState} from "react";

export default function WithRef()
{
    let [counter,setCounter] = useState(0);
    let another = useRef(0);
    const anotherHandler = ()=>{
        another.current ++;
    }
    console.log('Render WhyRef counter ',counter, ' Another ',another);
    return (<div>
        <h3>{counter}</h3>
        <button type={"button"} onClick={()=>setCounter(counter+1)}>
            &nbsp;    + &nbsp;
        </button>
        <button type={"button"} onClick={anotherHandler}>
            &nbsp;    Inc Another &nbsp;
        </button>
    </div>)
}