const { Model, DataTypes } = require('sequelize');
const seq = require('../index.js');


class Related extends Model {}

Related.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  current_product_id:{
    type: DataTypes.INTEGER,
  },

  related_product_id:{
    type: DataTypes.INTEGER,
  },

}, {
  indexes: [
    {
      fields: ['current_product_id']
    },
  ],
  sequelize: seq
});



module.exports = Related;


// const { Sequelize } = require('sequelize');
// const seq = require('../index.js');


// const Products = seq.define('Product', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   name:{
//     type: Sequelize.TEXT,
//     allowNull: false,
//   },
//   slogan:{
//     type: Sequelize.TEXT,
//   },
//   description:{
//     type: Sequelize.TEXT,
//   },
//   category:{
//     type: Sequelize.TEXT,
//     allowNull: false,
//   },
//   default_price: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
// })


// module.exports = Products;