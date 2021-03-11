const { validateSignUp, checkIfUserExists, validateLogin } = require('./user');
const { validateTodoAddition, checkIfTodoExists, checkIfTodoIsForCurrentUser } = require('./todo');
const authenticate = require('./auth');

module.exports = {
  validateSignUp,
  checkIfUserExists,
  validateLogin,
  validateTodoAddition,
  checkIfTodoExists,
  checkIfTodoIsForCurrentUser,
  authenticate,
};
