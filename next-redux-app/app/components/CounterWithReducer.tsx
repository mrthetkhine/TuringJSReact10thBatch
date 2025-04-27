'use client';

import {useReducer} from "react";

interface CounterState  {
    count :number;
}
type CounterAction = {
    type:"INC"
    }|
    {
        type:"DEC"
    }
function counterReducer(state:CounterState ,action:CounterAction):CounterState
{
    switch (action.type)
    {
        case "DEC":
            return {
                count : state.count-1
            }
        case "INC":
            return {
                count : state.count+1
            }
    }
}
let initState:CounterState = {
    count:0
}
function CounterWithReducer()
{
    let [state,dispatch] = useReducer(counterReducer,initState);

    const incHandler = ()=>{
        dispatch({
            type:"INC"
        })
    }
    const decHandler = ()=>{
        dispatch({
            type:"DEC"
        })
    }
    return (<div>
        <button type={"button"} onClick={incHandler}>
            +
        </button>
        <div>{state.count}</div>
        <button type={"button"} onClick={decHandler}>
            -
        </button>
    </div>)
}
export default CounterWithReducer;