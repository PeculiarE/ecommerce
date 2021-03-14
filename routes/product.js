const { Router } = require('express');
const {
  addTodo,
  fetchTodo,
  updateTitleOfTodo,
  deleteTheTodo,
  updateStatusOfTodo,
  allTodosForSingleUser,
  adminAllTodos,
} = require('../controllers');
const {
  authenticate,
  checkIfTodoExists,
  checkIfTodoIsForCurrentUser,
  validateTodoAddition,
  adminAccessValidator,
} = require('../middlewares');

const todoRouter = Router();
todoRouter.use(authenticate);

todoRouter.post('/todo', validateTodoAddition, addTodo);
todoRouter.get('/todo', allTodosForSingleUser);
todoRouter.get('/todos', adminAccessValidator, adminAllTodos);

todoRouter.use('/todo/:todoId', checkIfTodoExists, checkIfTodoIsForCurrentUser);

todoRouter.get('/todo/:todoId', fetchTodo);
todoRouter.put('/todo/:todoId', updateTitleOfTodo);
todoRouter.delete('/todo/:todoId', deleteTheTodo);
todoRouter.patch('/todo/:todoId', updateStatusOfTodo);

module.exports = todoRouter;
