'use client';

import {Button} from "@mui/material";
import {useBoundStore} from "../../stores/useBoundStore";

export default function CounterUI()
{
    const {count,inc,dec} = useBoundStore();
    console.log('Counter ',count);
    return(<div>
        <Button type={"submit"}
                variant={"contained"}
                onClick={inc} >+</Button>
        Counter {count}
        <Button type={"submit"}
                variant={"contained"}
                onClick={dec}>-</Button>
    </div>);
}