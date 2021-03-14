const { todoTitleSchema } = require('../validation');
const { getSingleTodoById } = require('../services');

const validateTodoAddition = (req, res, next) => {
  try {
    const { error } = todoTitleSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({
      status: 'Fail',
      message: error.message,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

const checkIfTodoExists = async (req, res, next) => {
  try {
    const { todoId } = req.params;
    const todo = await getSingleTodoById(todoId);
    if (todo) {
      req.todo = todo;
      return next();
    }
    return res.status(404).json({
      status: 'Fail',
      message: 'Todo does not exist',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};
const checkIfTodoIsForCurrentUser = async (req, res, next) => {
  try {
    if (req.todo.user_id === req.user.id || req.user.is_admin) {
      return next();
    }
    return res.status(404).json({
      status: 'Fail',
      message: 'Todo does not belong to user',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

module.exports = { validateTodoAddition, checkIfTodoExists, checkIfTodoIsForCurrentUser };
