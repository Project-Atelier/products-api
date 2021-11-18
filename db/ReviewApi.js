const Features = require('../db/Models/Features');
const Photos = require('../db/Models/Photos');
const Products = require('../db/Models/Products');
const Related = require('../db/Models/Related');
const Skus = require('../db/Models/Skus');
const Styles = require('../db/Models/Styles');


const getProducts = function(page, count){
  // Skip 5 instances and fetch the 5 after that
  // Project.findAll({ offset: 5, limit: 5 });
  let skip = (page - 1) * count

  return Products.findAll({
    attributes: [
      'id',
      'name',
      'slogan',
      'category',
      'default_price',
    ],
    offset: skip,
    limit: count,
  })

}


module.exports.getProducts = getProducts;