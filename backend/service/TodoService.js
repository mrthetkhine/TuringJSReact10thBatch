const Todo = require('./../models/ToDo');
async function getAllTodos()
{
    return Todo.find();
}
async function getTodoById(todoId)
{
    return Todo.findById(todoId);
}
async function saveTodo(todo)
{
    let newToDo =  new Todo(todo);
    return newToDo.save();
}
async function updateTodoById(id,todo)
{
    let existingTodo = await Todo.findById(id);
    if(!existingTodo)
    {
        throw new Error('Todo not found')
    }
    else
    {
        return Todo.findByIdAndUpdate(id,todo,{new :true})
    }
}
async function deleteTodoById(todoId)
{
    let todo = await Todo.findById(todoId);
    if(!todo)
    {
        throw new Error('Todo not found')
    }
    else
    {
        return Todo.findByIdAndDelete(todoId);
    }
}
module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    deleteTodoById,
    updateTodoById,
}