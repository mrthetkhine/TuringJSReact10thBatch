import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";

export interface TodoModel{
    id:number,
    title: string,
    completed:boolean,
}
export interface TodoState{
    todos:TodoModel[]
}
const initialState :TodoState ={
    todos:[
        {

            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
    ]
}
export const todoSlice = createAppSlice({
    name: "todo",
    initialState,
    reducers:(create) => ({
        addTodo: create.reducer((state,action:PayloadAction<TodoModel>) => {
            state.todos.push(action.payload);
        }),
        deleteTodo: create.reducer((state,action:PayloadAction<TodoModel>) => {
            state.todos = state.todos.filter(td=>td.id!=action.payload.id);
        }),
        updateTodo:  create.reducer((state,action:PayloadAction<TodoModel>) => {
            state.todos = state.todos.map(td=>td.id==action.payload.id?action.payload: td);
        }),
    }),
    selectors:{
        selectTodo: (state) => state.todos,

    },
});
export const { addTodo,deleteTodo,updateTodo } =
    todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;