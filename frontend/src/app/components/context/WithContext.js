'use client';
import {useContext, useState} from 'react';
import ThemeContext from './ThemeContext';
function GrandChild()
{
    const theme = useContext(ThemeContext);
    return <div style={{color:theme.color}}>
        Message in grand child
    </div>
}
function Child()
{
    return(<div>
        Child
        <GrandChild />
    </div>)
}
function Parent()
{
    return(<div>
        Parent
        <Child />
    </div>)
}
export default function WithContext()
{

    let [color,setColor]= useState('blue');
    return (<div>
        <button type={"button"} onClick={()=>setColor('green')}>Green</button>
        &nbsp;
        <button type={"button"} onClick={()=>setColor('yellow')}>Yellow</button>
        <ThemeContext.Provider value={{color:color}}>
            With context
            <Parent/>
        </ThemeContext.Provider>

    </div>);
}