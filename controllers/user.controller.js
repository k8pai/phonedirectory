const { ObjectId } = require('mongodb');
const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
	const data = await User.find({});
	res.status(200).json(data);
};

exports.insertUser = async (req, res) => {
	const data = req.body;
	const response = await User.create(data);
	if (!response) {
		return res.status(400).send(`Couldn't insert data`);
	}
	res.status(200).json({});
};

exports.removeUser = async (req, res) => {
	const { id } = req.params;
	// const objId = ;

	const isRemoved = await User.findOneAndRemove({ _id: new ObjectId(id) });
	if (!isRemoved) {
		return res.status(400).send('something went wrong! cannot delete user');
	}
	const response = await User.find({});
	res.status(200).json(response);
	// console.log('reponse = ', response);
};
