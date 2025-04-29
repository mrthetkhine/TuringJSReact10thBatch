import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";
import {act} from "react-dom/test-utils";

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
        loadAllTodos: create.asyncThunk(
            async () => {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                let data = response.json();
                return data;
            },
            {
                pending: (state) => {
                    //state.status = "loading";
                },
                fulfilled: (state, action) => {
                    console.log('payload ',action.payload);
                    state.todos = action.payload;
                },
                rejected: (state) => {
                    //state.status = "failed";
                },
            },
        ),
    }),
    selectors:{
        selectTodo: (state) => state.todos,
        selectAllCompleteTodo : (state)=>state.todos.filter(todo=>todo.completed)
    },
});
export const { addTodo,deleteTodo,updateTodo,loadAllTodos } =
    todoSlice.actions;
export const { selectTodo,selectAllCompleteTodo } = todoSlice.selectors;