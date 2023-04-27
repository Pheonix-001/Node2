const express = require('express')
const app = express();

const dotenv = require('dotenv')
dotenv.config();

app.use('/api/home', require('./routes/home'));

app.get('/', (req, res) => {
	res.send("hello")
	// res.status(200).send("welcome to home page")
})

const port = process.env.PORT || 4001
app.listen(port, () => {
	console.log("App is listening on port", port);
})