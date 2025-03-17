const todoService = require('./../service/TodoService');
const mongoose = require("mongoose");
async function getAllTodos(req,res,next)
{
    let todos = await todoService.getAllTodos();
    res.json(todos);
}
async function getTodosById(req,res,next)
{
    let todoId = req.params.id;
    let todo  = await todoService.getTodoById(todoId);
    if(todo)
    {
        res.json({
            message:"Success",
            data:todo
        });
    }
    else
    {
        res.status(404).json({
            error:"Todo "+todoId+" not found"
        })
    }

}
async function saveTodo(req,res,next)
{
    let todo = req.body;
    try
    {
        let newTodo = await todoService.saveTodo(todo);
        res.status(201).json({
            message:"Success",
            data:newTodo
        })
    }
    catch(err)
    {
        //console.log('Error ',err);
        if(err instanceof mongoose.Error.ValidationError)
        {
            res.status(400).json({
                error:err
            })
        }
        else
        {
            res.status(500).json({
                error:err
            })
        }

    }
}
async function updateTodoById(req,res,next)
{
    let id = req.params.id;
    let todo = req.body;
    try
    {
        let updateTodo = await todoService.updateTodoById(id,todo);
        res.json({
            message:"Success",
            data:updateTodo,
        })
    }
    catch(err)
    {
        res.status(404).json({
            error:"Tod id "+id+" not found"
        })
    }
}

async function deleteTodoById(req,res,next)
{
    let id = req.params.id;
    try
    {
        let todo = await todoService.deleteTodoById(id);
        res.json({
            message: "Success",
            data: {
                _id:id,
            },
        })
    }
    catch(e)
    {
        res.status(404).json({
            error:"Tod id "+id+" not found"
        })
    }


}
module.exports = {
    getAllTodos,
    getTodosById,
    saveTodo,
    updateTodoById,
    deleteTodoById,
}