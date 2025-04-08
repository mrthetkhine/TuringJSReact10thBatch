'use client';

import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, CardContent, TextField,Card} from "@mui/material";
import {useState} from "react";


const todoSchema = yup.object({
    title: yup.string().required(),
}).required();
function Todo({todo,deleteTodo})
{
    const onDeleteHandler = ()=>{
      console.log('Delete ',todo);
      deleteTodo(todo);
    };
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    {todo.title} &nbsp;
                    <Button variant="contained" type="button" onClick={onDeleteHandler}>Delete</Button>
                </CardContent>
            </Card>

        </Box>);
}
function TodoInput({addTodo})
{
    const { register, handleSubmit,reset, formState:{ errors } } = useForm({
        resolver: yupResolver(todoSchema)
    });
    const onSubmit = data => {
        addTodo(data.title);
        reset();
    }

    return(<Box
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                    {...register("title")}
                    label="Title"
                    variant="standard"
                    helperText={errors.title?.message}/>

            </div>
            <div>
                <Button variant="contained" type="submit">Add</Button>
            </div>

        </form>
    </Box>);
}
let initTodos = [
    {
        "userId": 1,
        "id": 1,
        "title": "Task1 ",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "Task 2",
        "completed": false
    },

];
function nextId()
{
    let id = 5;
    return function()
    {
        return id++;
    }
}
let unique = nextId();
export default function TodoList()
{
    let [todos,setTodos] = useState(initTodos);
    console.log('Todos ',initTodos);
    const addToDoHandler = (todo)=>{
        console.log('AddTodo In parent ',todo);
        setTodos([...todos,{
            title: todo,
            id: unique()
        }])
        console.log('add todo handler done');
    }
    const deleteTodoHandler = (todo)=>{
        console.log('Delete In parent ',todo);
        let newTodos = todos.filter(item=>item.id!=todo.id);
        setTodos(newTodos);

    }
    return(<div>
        <TodoInput addTodo={addToDoHandler}/>
        {
            todos.map(todo=><Todo todo={todo}
                                  key={todo.id}
                                  deleteTodo={deleteTodoHandler}  />)
        }
    </div>);
}