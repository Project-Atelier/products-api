const { Model, DataTypes } = require('sequelize');
const seq = require('../index.js');


class Skus extends Model {}

Skus.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
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
  indexes: [
    {
      fields: ['styleId'],
      using: 'hash'
    },
  ],
  sequelize: seq
});

module.exports = Skus;