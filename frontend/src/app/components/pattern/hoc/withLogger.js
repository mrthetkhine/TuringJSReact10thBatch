'use client';
import {useEffect} from "react";

export default function withLogger(Component)
{
    return (props)=>{
        useEffect(()=>{
            console.log('Render withLogger ',Component.name);
        });
        return <Component  {...props} />;
    }
}