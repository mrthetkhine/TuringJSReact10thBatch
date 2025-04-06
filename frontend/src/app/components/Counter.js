'use client';

import {useState} from "react";

function Child()
{
    console.log("Render child");
    return (<div>
        Child
    </div>);
}

export default function Counter()
{
    let [count,setCount] = useState(0);
    let [another,setAnother]= useState(0);

    const incHandler = ()=>{
        console.log('Before setcount ',count);
        setCount(count+1);
        console.log('After Counter ',count);
    };
    const updateAnother = ()=>{
        setAnother(another+1);
        console.log('Another ',another);
    };
    console.log('Render CounterWithoutState');
    return (<div>
        Counter {count}&nbsp;
        Double Counter {count*2}&nbsp;
        <button type={"button"} onClick={incHandler}>&nbsp; + &nbsp;  </button>
        <button type={"button"} onClick={updateAnother}>&nbsp; Another Inc &nbsp;  </button>
        <Child/>
    </div>);
}