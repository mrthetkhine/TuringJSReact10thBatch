import {CounterSlice, CounterState} from "../counter/counter-slice";
import {StateCreator} from "zustand";
import {produce} from "immer";
import {MyState} from "../useBoundStore";

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
    [],
    [],
    TodoSlice
    >= (set)=>({
    ...defaultInitState,
    addTodo:(todo:Todo)=>set( produce((state: TodoState) => void(state.todos.push(todo)))),
    deleteTodo: (todo:Todo) => set(produce((state:TodoState) =>
                            void( state.todos= state.todos.filter(td=>td.id!=todo.id)))),
    updateTodo: (todo:Todo) => set(produce((state:TodoState) =>{
        state.todos =state.todos.map(td=>td.id==todo.id? todo:td)
    }))
});