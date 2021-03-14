const {
  addNewTodo,
  updateSingleTodoTitle,
  deleteSingleTodo,
  getAllTodos,
  getAllTodosForASingleUser,
  updateSingleTodoStatus,
} = require('../services');

const addTodo = async (req, res) => {
  try {
    const todo = await addNewTodo(req.body, req.user.id);
    res.status(201).json({
      status: 'Success',
      message: 'Todo added successfully',
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

const fetchTodo = async (req, res) => {
  try {
    res.status(200).json({
      status: 'Success',
      message: 'Todo fetched successfully',
      data: req.todo,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};
const updateTitleOfTodo = async (req, res) => {
  try {
    const theUpdatedTodo = await updateSingleTodoTitle(req.body.title, req.todo.id);
    res.status(200).json({
      status: 'Success',
      message: 'Todo updated successfully',
      data: theUpdatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};
const deleteTheTodo = async (req, res) => {
  try {
    await deleteSingleTodo(req.todo.id);
    res.status(200).json({
      status: 'Success',
      message: 'Todo deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

const updateStatusOfTodo = async (req, res) => {
  try {
    req.todo.is_complete = !req.todo.is_complete;
    const theUpdatedStatus = await updateSingleTodoStatus(req.todo.id, req.todo.is_complete);
    res.status(200).json({
      status: 'Success',
      message: 'Todo status updated successfully',
      data: theUpdatedStatus,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

const allTodosForSingleUser = async (req, res) => {
  try {
    const todoList = await getAllTodosForASingleUser(req.user.id);
    res.status(200).json({
      status: 'Success',
      message: 'List of todos fetched successfully',
      data: todoList,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};
const adminAllTodos = async (req, res) => {
  try {
    const todoListAdmin = await getAllTodos();
    res.status(200).json({
      status: 'Success',
      message: 'All Todos fetched successfully',
      data: todoListAdmin,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  addTodo,
  fetchTodo,
  updateTitleOfTodo,
  deleteTheTodo,
  updateStatusOfTodo,
  allTodosForSingleUser,
  adminAllTodos,
};
