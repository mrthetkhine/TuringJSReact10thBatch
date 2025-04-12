'use client';
import {useState} from "react";
import Counter from "../Counter";


const data = ["Orange",'Apple',"Banana",];
export default function KeyWithIndexProblem()
{
    const [items,setItems] = useState(data);
    const onSortHandler = ()=>{
        items.sort();
        setItems([
            ...items
        ]);
    };
    const onDelete = (index)=>{
        console.log('Index ',index);
        items.splice(index,1);
        console.log('New items ',items);
        setItems([
            ...items
        ]);
    }
    return (<div>
        Key with index
        {
            items.map( (item,index)=><div key={index}>
                {item}
                <Counter/>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={()=>onDelete(index)}>
                    Delete
                </button>
            </div>)
        }
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onSortHandler}>Sort</button>
    </div>);
}