const express = require('express');
const seq = require('../db/db.js');
const ReviewApi = require('../db/ReviewApi.js');

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/products', function (req, res) {
  let page = 1;
  let count = 5;

  if(req.query.page){
    page = parseInt(req.query.page)
  };

  if(req.query.count){
    count = parseInt(req.query.count)
  };

  ReviewApi.getProducts(page, count)
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    console.log('err in getProducts', err)
    res.sendStatus(500)
  })
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});