import { create } from 'zustand'
import {CounterSlice, createCounterSlice} from "./counter/counter-slice";
import {createTodoSlice, TodoSlice} from "./todos/todo-slice";

export type MyState = CounterSlice & TodoSlice;
export const useBoundStore = create<MyState>((...a) => ({
    ...createCounterSlice(...a),
    ...createTodoSlice(...a),
}))