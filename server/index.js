const express = require('express');
const seq = require('../db/db.js');
const Features = require('../db/Models/Features');
const Photos = require('../db/Models/Photos');
const Products = require('../db/Models/Products');
const Related = require('../db/Models/Related');
const Skus = require('../db/Models/Skus');
const Styles = require('../db/Models/Styles');

const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/', function (req, res) {
  res.send('Hello World')
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});