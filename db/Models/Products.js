const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = require('../db.js');


class Products extends Model {}

Products.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  slogan:{
    type: DataTypes.TEXT,
  },
  description:{
    type: DataTypes.TEXT,
  },
  category:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  default_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: seq
});

module.exports = Products;