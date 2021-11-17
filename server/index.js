const express = require('express');
const seq = require('../db/db.js');

const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/', function (req, res) {
  res.send('Hello World')
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});