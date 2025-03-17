var express = require('express');
var router = express.Router();
var todos = require('./../controller/TodoController');

router.get('/',todos.getAllTodos);
router.get('/:id',todos.getTodosById)
router.post('/',todos.saveTodo)
router.put('/:id',todos.updateTodoById)
router.delete('/:id',todos.deleteTodoById)

module.exports = router;