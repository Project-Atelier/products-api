const Features = require('../db/Models/Features');
const Photos = require('../db/Models/Photos');
const Products = require('../db/Models/Products');
const Related = require('../db/Models/Related');
const Skus = require('../db/Models/Skus');
const Styles = require('../db/Models/Styles');

// get all products info
const getProducts = function(page, count){
  // Skip 5 instances and fetch the 5 after that
    // Project.findAll({ offset: 5, limit: 5 });
  let skip = (page - 1) * count

  return Products.findAll({
    attributes: [
      'id',
      'name',
      'slogan',
      'description',
      'category',
      'default_price',
    ],
    offset: skip,
    limit: count,
  })
}

//get a product info
const getProductInfo = function(productId){
  let productInfo = [];

  return Products.findAll({
    attributes: [
      'id',
      'name',
      'slogan',
      'description',
      'category',
      'default_price',
    ],
    where: {
      id: productId
    },
  })
}

const getFeatures = function(productId){
  return Features.findAll({
    attributes: [
      'feature',
      'value',
    ],
    where: {
      product_id: productId
    },
  })
}

//get related product id
const getRelatedId = function(productId){
  let relatedId = [];

  return Related.findAll({
    attributes: [
      'related_product_id',
    ],
    where: {
      current_product_id: productId
    },
  })
  .then( results => {
    for(let i=0; i < results.length; i++){
      relatedId.push(results[i].related_product_id)
    }
    return relatedId;
  })
}

// [
//   {
//       "feature": "Fabric",
//       "value": "Canvas"
//   },
//   {
//       "feature": "Buttons",
//       "value": "Brass"
//   }
// ]

module.exports.getProducts = getProducts;
module.exports.getProductInfo = getProductInfo;
module.exports.getRelatedId = getRelatedId;

module.exports.getFeatures = getFeatures;