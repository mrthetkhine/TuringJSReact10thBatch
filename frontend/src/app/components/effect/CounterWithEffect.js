'use client';

import {useEffect, useRef, useState} from "react";
import {useDelayedRender} from "next/dist/client/components/react-dev-overlay/ui/hooks/use-delayed-render";

function Child()
{
    console.log("Render child");
    return (<div>
        Child
    </div>);
}

export default function CounterWithEffect()
{
    let counterRef = useRef(null);
    let [count,setCount] = useState(0);
    let [another,setAnother]= useState(0);

    console.log('Render Counter ',counterRef);
    useEffect(()=>{
        console.log('UseEffect run ',counterRef.current.clientWidth, ' height ',counterRef.current.clientHeight);
    });
    const incHandler = ()=>{
        console.log('Before setcount ',count);
        setCount(count+1);
        console.log('After Counter ',count);
    };
    const updateAnother = ()=>{
        setAnother(another+1);
        console.log('Another ',another);
    };
    return (<div ref={counterRef}>
        Counter {count}&nbsp;
       {/* Double Counter {count*2}&nbsp;*/}
        <button type={"button"} onClick={incHandler}>&nbsp; + &nbsp;  </button>
       {/*
       <button type={"button"} onClick={updateAnother}>&nbsp; Another Inc &nbsp;  </button>
        <Child/>
        */}
    </div>);
}