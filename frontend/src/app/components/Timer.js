'use client';

import {useEffect, useState} from "react";


export default function Timer()
{
    let [now,setNow] = useState(new Date());
    useEffect(()=>{
       setInterval(()=>{
           setNow(new Date());
       },1000);
    },[]);
    return(<div>
        {now.toString()}
    </div>)
}
