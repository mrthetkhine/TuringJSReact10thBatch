import {useState} from "react";

export default function useCustomReducer(reducerFn,initState)
{
    let [state,setState] = useState(initState);
    function dispatch(action)
    {
        let newState = reducerFn(state,action);
        setState(newState);
    }
    return [state,dispatch];
}