'use client';
import {useState} from "react";

function ChildButton({callback})
{
    return(<div>
        Child
        <button type={"button"} onClick={callback}>Click</button>
    </div>)
}
export default function PassFunction()
{
    let [counter,setCounter ]= useState(0);
    let callbackHandler = ()=>{
      console.log('Callback from parent');
      setCounter(counter+1);
    };
    return (<div>
        Parent {counter}
        <ChildButton callback={callbackHandler}></ChildButton>
    </div>);
}