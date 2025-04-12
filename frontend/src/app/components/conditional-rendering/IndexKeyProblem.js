'use client';

import {useState} from "react";

let list = [
    'Apple',
    "Orange",
    "Banana"
]
export default function IndexKeyProblem()
{
    let [items,setItems] = useState(list);
    const updateHandler=(item)=>{
        let newItems =items.map(it=>it==item?it+' Update':it);
        setItems(newItems);
    };
    const btnDeleteHandler = (item)=>{
        let newItems =items.filter(it=>it!=item);
        setItems(newItems);
    }
    const btnSortHandler = ()=>{
        items.sort();
        setItems([...items]);
    }
    return (<div>
        <button type={"button"} onClick={btnSortHandler}>
            Sort
        </button>
        {
            items.map((item,index)=><div key={index}>
                {item}
                &nbsp;
                <button type={"button"} onClick={()=>btnDeleteHandler(item)}>Delete</button>
                &nbsp;
                <button type={"button"} onClick={()=>updateHandler(item)}>Update</button>
            </div>)
        }
    </div>);
}