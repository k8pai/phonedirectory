const {
	insertUser,
	getUsers,
	removeUser,
} = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.get('/', getUsers);

userRouter.post('/', insertUser);

userRouter.delete('/:id', removeUser);

module.exports = userRouter;
