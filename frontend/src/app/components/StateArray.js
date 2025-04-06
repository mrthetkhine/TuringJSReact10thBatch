'use client';
import {useState} from "react";

export default function StateArray()
{
    console.log('Render');
    let [items,setItems]= useState(['Apple','Orange',"Banana"]);
    const addItemHandler = (event)=>{
        console.log('event ',event);
        setItems([...items,'Another']);
    }
    return (<div>
        <button onClick={addItemHandler} type={"button"}>Add</button>
        {
            items.map((item,index)=><div key={index}>
                {item}
            </div> )
        }
    </div>)
}