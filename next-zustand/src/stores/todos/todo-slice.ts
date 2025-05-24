'use client';
import {CounterSlice, CounterState} from "../counter/counter-slice";
import {StateCreator} from "zustand";
import {produce} from "immer";
import {MyState} from "../useBoundStore";
import { immer } from "zustand/middleware/immer";

export interface Todo
{
    id:number;
    title:string;
    completed:boolean;
}
export interface TodoState
{
    todos:Todo[]
}
export interface TodoActions
{
    loadAllTodo:(todos:Todo[])=>void;
    addTodo:(todo:Todo)=>void;
    deleteTodo:(todo:Todo)=>void;
    updateTodo:(todo:Todo)=>void;
}
export type TodoSlice = TodoState & TodoActions;
export const defaultInitState:TodoState = {
    todos : [
        {
            id:1,
            title:'Task 1',
            completed:true,
        },
        {
            id:2,
            title:'Task 2',
            completed:true,
        }
    ]
}
export const createTodoSlice:StateCreator<
    MyState,
    [['zustand/devtools', never]],
    [],
    TodoSlice
    >= (set)=>({
    ...defaultInitState,
    loadAllTodo:(todos:Todo[])=>set( produce((state: TodoState) => void(state.todos=todos)),undefined,'todos/loadAllTodo'),
    addTodo:(todo:Todo)=>set( produce((state: TodoState) => void(state.todos.push(todo))),undefined,'todos/addTodo'),
    deleteTodo: (todo:Todo) => set(produce((state:TodoState) =>
                            void( state.todos= state.todos.filter(td=>td.id!=todo.id))),undefined,'todos/deleteTodo'),
    updateTodo: (todo:Todo) => set(produce((state:TodoState) =>{
        state.todos =state.todos.map(td=>td.id==todo.id? todo:td)
    }),undefined,'todos/updateTodo')
});