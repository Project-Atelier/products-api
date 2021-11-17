const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = require('../db.js');


class Skus extends Model {}

Skus.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  styleId: {
    type: DataTypes.INTEGER,
    references:{
      model:"Styles",
      key: 'id'
    },
  },
  size:{
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [0,10],
    },
  },
  quantity:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },


}, {
  sequelize: seq
});

module.exports = Skus;