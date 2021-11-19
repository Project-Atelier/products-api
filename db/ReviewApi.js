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
  let productInfo;
  let features = [];

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
  .then(results => {
    productInfo = results[0].dataValues
  })
  //get the features
  .then(() => {return getFeatures(productId)})
  .then( results => {
    for(let i = 0; i < results.length; i++){
      features.push(results[i].dataValues)
    }
    //combine features and product info
    productInfo['features'] = features
    return productInfo
  })
}

//get product features
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
    for(let i = 0; i < results.length; i++){
      relatedId.push(results[i].related_product_id)
    }
    return relatedId;
  })
}

module.exports.getProducts = getProducts;
module.exports.getProductInfo = getProductInfo;
module.exports.getRelatedId = getRelatedId;
