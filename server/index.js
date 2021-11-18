const express = require('express');
const seq = require('../db/db.js');
const ReviewApi = require('../db/ReviewApi.js');

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
});

// get all products info
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

//get a product info
app.get('/products/:product_id', function (req, res) {
  let productId = parseInt(req.params.product_id)

  ReviewApi.getProductInfo(productId)
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    console.log('err in getProducts', err)
    res.sendStatus(500)
  })
})


//get related product id
app.get('/products/:product_id/related', function (req, res) {
  let productId = parseInt(req.params.product_id)

  ReviewApi.getRelatedId(productId)
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    console.log('err in getRelatedId', err)
    res.sendStatus(500)
  })
})


////Test the getFeatures
// app.get('/products/:product_id', function (req, res) {
//   let productId = parseInt(req.params.product_id)

//   ReviewApi.getFeatures(productId)
//   .then(results => {
//     res.status(200).json(results)
//   })
//   .catch(err => {
//     console.log('err in getProducts', err)
//     res.sendStatus(500)
//   })
// })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});