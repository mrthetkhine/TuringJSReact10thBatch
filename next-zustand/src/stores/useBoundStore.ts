import {create, StateCreator} from 'zustand'
import {CounterSlice, createCounterSlice} from "./counter/counter-slice";
import {createTodoSlice, TodoSlice} from "./todos/todo-slice";
import {devtools} from "zustand/middleware";


export type MyState = CounterSlice & TodoSlice;
export const useBoundStore = create<MyState>()(devtools((...a) => ({
    ...createCounterSlice(...a),
    ...createTodoSlice(...a),
})))