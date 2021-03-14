const { generateUUID } = require('../utils');
const db = require('../db/setup');
const {
  insertTodo,
  fetchAllTodos,
  fetchAllTodosForSingleUser,
  fetchSingleTodoById,
  updateTodoTitle,
  deleteTodo,
  updateTodoStatus,
} = require('../db/queries/todo');

const addNewTodo = async (data, userId) => {
  const id = generateUUID();
  const { title } = data;
  return db.one(insertTodo, [id, title, userId]);
};

const getAllTodos = async () => db.manyOrNone(fetchAllTodos);

const getAllTodosForASingleUser = async (userId) => (
  db.manyOrNone(fetchAllTodosForSingleUser, [userId])
);

const getSingleTodoById = async (todoId) => db.oneOrNone(fetchSingleTodoById, [todoId]);

// const getSingleTodoByTitle;

const updateSingleTodoTitle = async (data, todoId) => db.one(updateTodoTitle, [data, todoId]);

const deleteSingleTodo = async (todoId) => db.none(deleteTodo, [todoId]);

const updateSingleTodoStatus = async (todoId, isComplete) => (
  db.one(updateTodoStatus, [todoId, isComplete])
);

module.exports = {
  addNewTodo,
  getSingleTodoById,
  updateSingleTodoTitle,
  deleteSingleTodo,
  getAllTodos,
  getAllTodosForASingleUser,
  updateSingleTodoStatus,
};
