const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		name: String,
		phone: String,
	},
	{
		timestamps: true,
	},
);

const User = model('user', userSchema);

module.exports = User;
