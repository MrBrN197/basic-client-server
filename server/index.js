const express = require('express');
const app = express();
const issues = require('./issues');

app.use(express.json());

app.use('/issues', issues);

const port = 8080;
app.listen(port, () => {console.log(`listening on port: ${port}`)});