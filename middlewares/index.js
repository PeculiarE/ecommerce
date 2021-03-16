const { validateSignUp, checkIfUserExists, validateLogin } = require('./user');
const { validateProductAddition, checkIfProductExists, checkIfProductIsForCurrentUser } = require('./product');
const { authenticate, verifyUserIsNotProductOwner, verifyUserHasNotRatedProductBefore } = require('./auth');

module.exports = {
  validateSignUp,
  validateLogin,
  validateProductAddition,
  checkIfUserExists,
  authenticate,
  checkIfProductExists,
  checkIfProductIsForCurrentUser,
  verifyUserIsNotProductOwner,
  verifyUserHasNotRatedProductBefore,
};
