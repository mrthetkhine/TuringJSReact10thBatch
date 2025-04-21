'use client';
import {useEffect, useState} from "react";

export default function EffectOnlyOnce()
{
    let [counter,setCounter] = useState(0);
    let [another,setAnother] = useState(0);

    console.log('Render');

    useEffect(()=>{
        console.log('Effect run');
    },[counter]);

    return(<div>
        {counter}
        &nbsp;
        <button type={"button"} onClick={()=>setCounter(counter+1)}>Inc</button>

        &nbsp;
        <button type={"button"} onClick={()=>setAnother(another+1)}>Another Inc</button>

    </div>);
}