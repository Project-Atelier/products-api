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
  .then(async results => {
    productInfo = results[0].dataValues
    //get the features and combine with product info
    let featureData = await getFeatures(productId)
    productInfo['features'] = featureData
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
  .then( async data =>  {
    for (let i = 0; i < data.length; i++){
            let styleInfo = {};

            styleInfo['style_id'] = data[i].dataValues.id
            styleInfo['name'] = data[i].dataValues.name
            styleInfo['original_price'] = data[i].dataValues.original_price
            styleInfo['sale_price'] = data[i].dataValues.sale_price
            styleInfo['default?'] = !!data[i].dataValues.default_style
            let photoData = await getPhotos(data[i].dataValues.id)
            let skusData = await getSkus(data[i].dataValues.id)
            // console.log("here is getSkus", skusData)
            styleInfo['photos'] = photoData
            styleInfo['skus'] = skusData
            results.push(styleInfo)
            styles['results'] = results
          }
    return styles
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
      'id',
      'quantity',
      'size',
    ],
    where: {
      styleId: id
    },
  })
  .then( result =>{
    let skus = {};
    for(let i = 0; i < result.length; i++){
      skus[`${result[i].id}`]= result[i].dataValues
      delete skus[`${result[i].id}`].id
    }
    return skus
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