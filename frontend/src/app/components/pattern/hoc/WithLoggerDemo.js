'use client';

import withLogger from "./withLogger";
import Counter from "../../Counter";
import TodoList from "../../TodoList";

let CounterWithLogger = withLogger(Counter);
let TodoListWithLogger = withLogger(TodoList);
export default function WithLoggerDemo()
{
    return(<div>
        <CounterWithLogger/>
        <TodoListWithLogger/>
    </div>);
}