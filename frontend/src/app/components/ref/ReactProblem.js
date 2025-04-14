'use client';
import {useState} from "react";

const data = ["Apple","Orange","Banana"]
export default function ReactProblem()
{
    const [items,setItems]= useState(data);
    const onAddHandler= ()=>{
      setItems([...items,'New Item by React']);
    };
    const nativeAddHandler =()=>{
        let elements = document.querySelector("li:first-child");
        console.log('Elements ',elements);

        let newElement = document.createElement("li")
        newElement.textContent = "Append by Native DOM";
        document.getElementById("listItem").appendChild(newElement);
        //elements.textContent = "Update by native DOM";
    }
    const sortHandler= ()=>{
        items.sort();
        setItems([...items]);
    };
    console.log('Render ',items);
    return (<div>

        <h1>List count{items.length}</h1>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={nativeAddHandler}
        >Native Add</button>
        <ol id="listItem">
        {
            items.map((item,index)=><li key={index}>{item}</li>)
        }
        </ol>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onAddHandler}
        >React Add</button>

        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={sortHandler}
        >Sort</button>
    </div>);
}