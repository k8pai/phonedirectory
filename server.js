const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/user.route');
const editRouter = require('./routes/edit.route');
const { connect: dbConnect } = require('mongoose');
const { uri } = require('./dbconfig/db.config');
const port = process.env.PORT | 8080;

app.use(cors());
app.use(express.json());

// routes defined
app.use('/users', userRouter);
app.use('/edit', editRouter);

dbConnect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then((data) => {
		console.log('successfully connected to the database');
	})
	.catch((err) => {
		console.log(`Error: ${err}`);
	});

app.listen(port, () => {
	console.log(`listening to the port ${port}`);
});
