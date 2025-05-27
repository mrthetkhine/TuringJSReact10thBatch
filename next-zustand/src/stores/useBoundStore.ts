import {create} from 'zustand'
import {CounterSlice, createCounterSlice} from "./counter/counter-slice";
import {createTodoSlice, TodoSlice} from "./todos/todo-slice";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {AuthSlice, createAuthSlice} from "@/stores/auth/auth-slice";


export type MyState = CounterSlice & TodoSlice & AuthSlice;
export const useBoundStore = create<MyState>()(devtools(immer((...a) => ({
    ...createCounterSlice(...a),
    ...createTodoSlice(...a),
    ...createAuthSlice(...a),
}))))