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
    fetchTodos:()=>void;
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
    fetchTodos: async ()=>{
        console.log('Fetch todos');
        let response = await  fetch('https://jsonplaceholder.typicode.com/todos');
        let json = await response.json();
        console.log('todos ',json);
        set( (state: TodoState) =>{
            state.todos= (json as Todo[])
            return state;
        });
    },
    loadAllTodo:(todos:Todo[])=>set( (state: TodoState) => {
        state.todos=todos;
        return state;
    },undefined,'todos/loadAllTodo'),
    addTodo:(todo:Todo)=>set( (state: TodoState) => {
        state.todos.push(todo);
        return state;
    },undefined,'todos/addTodo'),
    deleteTodo: (todo:Todo) => set((state:TodoState) =>
    {
         state.todos= state.todos.filter(td=>td.id!=todo.id);
         return state;
    },undefined,'todos/deleteTodo'),
    updateTodo: (todo:Todo) => set((state:TodoState) =>({
        todos :state.todos.map(td=>td.id==todo.id? todo:td)
    }),undefined,'todos/updateTodo')
});