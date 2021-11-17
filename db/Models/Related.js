const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = require('../db.js');


class Related extends Model {}

Related.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true
  },

  current_product_id:{
    type: DataTypes.INTEGER,
  },

  related_product_id:{
    type: DataTypes.INTEGER,
  },

}, {
  sequelize: seq
});



module.exports = Related;