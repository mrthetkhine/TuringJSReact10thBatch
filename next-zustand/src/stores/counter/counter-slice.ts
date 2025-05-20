import {create,StateCreator} from "zustand";
import {produce} from "immer";
import {TodoSlice} from "../todos/todo-slice";
import {MyState} from "../useBoundStore";


export interface CounterState
{
    count:number;
}
export interface CounterActions
{
    inc:()=>void;
    dec:()=>void;
}
export type CounterSlice = CounterState & CounterActions;
export const defaultInitState:CounterState = {
    count : 20
}
/*
export const createCounterStore<CounterState>=((set) => ({
    ...defaultInitState,
    dec:()=>set( produce((state: CounterState) => void(--state.count))),
    //dec: () => set((state) => ({ count: state.count - 1 })),
    inc: () => set(produce((state) =>void( ++state.count))),
}))*/
export const createCounterSlice:StateCreator<
    MyState,
    [],
    [],
    CounterSlice
    > = (set)=>({
    ...defaultInitState,
    dec:()=>set( produce((state: CounterState) => void(--state.count))),
    inc: () => set(produce((state:CounterState) =>void( ++state.count))),
    }
);