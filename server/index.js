const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a todo
// get all todos
// get a todo
// update a todo
// delete a todo

app.get('/', (req,res) => res.send('hi from pern!'));

app.listen(port, console.log(`Server listening on ${port}`));
