"use client";
import {useAppDispatch,useAppSelector} from "@/lib/hooks";
import {selectCounter,inc,dec,incAmountAfterSecond} from "@/lib/features/simplecounter/simpleCounterSlice";

export default function SimpleCounter()
{
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCounter);

    const incHandler = ()=>{
        dispatch(inc());
    };
    const decHandler = ()=>{
        dispatch(dec());
    };
    //console.log('Thunkaction ',incAmountAfterSecond(10));
    const thunkHandler = ()=>{
        dispatch(incAmountAfterSecond(10))
    }

    //console.log('Action ',inc());
    return (<div>
        Simple Counter
        <button type={"button"} onClick={incHandler}>
            +
        </button>
        &nbsp; {count} &nbsp;
        <button type={"button"} onClick={decHandler}>
            -
        </button>
        <button type={"button"} onClick={thunkHandler}>
            FireThunk
        </button>
    </div>);
}