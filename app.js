const express = require('express');
const app = express();

app.get('/users/test', (req, res) => {
res.send({ msg: 'hello world'});
})

app.listen(5000, () => {
	console.log("server is running on port 5000");
})
