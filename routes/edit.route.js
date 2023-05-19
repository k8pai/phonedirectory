const { ObjectId } = require('mongodb');
const User = require('../models/user.model');

const editRouter = require('express').Router();

editRouter.put('/:id', async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const response = await User.updateOne({ _id: new ObjectId(id) }, data);
	if (!response) {
		return res.status(400).send('Something went wrong.');
	}
	res.status(200).json(response);
});

module.exports = editRouter;
