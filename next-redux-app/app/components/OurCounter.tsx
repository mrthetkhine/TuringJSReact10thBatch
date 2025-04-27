'use client';
import {useState,MouseEvent} from "react";

function OurCounter()
{
    let [count,setCount] = useState(0);

    const onClickHandler = (event:MouseEvent<HTMLButtonElement>)=>{
        setCount(count+1);
    }
    return(<div>
        {count}
        &nbsp;
        <button type={"button"} onClick={onClickHandler}>+</button>
    </div>);
}
export default OurCounter;