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


//get Product Styles
const getProductStyles = function(productId){
  let styles = {product_id : productId};
  let results = [];

  return Styles.findAll({
    attributes: [
      'id',
      'name',
      'original_price',
      'sale_price',
      'default_style',
    ],
    where: {
      productId: productId
    },
  })
  .then( data => {
    for (let i = 0; i < data.length; i++){
      let styleInfo = {};
      let photos = [];
      let skus = [];
      styleInfo['style_id'] = data[i].dataValues.id///////////////
      styleInfo['name'] = data[i].dataValues.name
      styleInfo['original_price'] = data[i].dataValues.original_price
      styleInfo['sale_price'] = data[i].dataValues.sale_price
      styleInfo['default?'] = !!data[i].dataValues.default_style
      return getPhotos(data[i].dataValues.id)/////////////////
      .then( result =>{
          for(let j = 0; j < result.length; j++){
            photos.push(result[j].dataValues)
            // console.log(photos)
          }
        })
        .then( () => {
          styleInfo['photo'] = photos
        })
        .then( () => {return getSkus(data[i].dataValues.id)})////////////////
        .then(result => {
          for(let k = 0; k < result.length; k++){
            skus.push(result[k].dataValues)
          }
        })
        .then( () => {
          styleInfo['skus'] = skus
          return styleInfo
        })
        results.push(styleInfo)
        styles['results'] = results
        return styles
     }
   })
}


//get photos
const getPhotos = function(id){
  return Photos.findAll({
    attributes: [
      'thumbnail_url',
      'url',
    ],
    where: {
      styleId: id
    },
  })
}

//get skus
const getSkus = function(id){
  return Skus.findAll({
    attributes: [
      'quantity',
      'size',
    ],
    where: {
      styleId: id
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
module.exports.getProductStyles = getProductStyles;