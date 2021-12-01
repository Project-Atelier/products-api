const { Model, DataTypes } = require('sequelize');
const seq = require('../index.js');


class Styles extends Model {}

Styles.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: DataTypes.INTEGER,
    references:{
      model:"Products",
      key: 'id'
    },
  },
  name:{
    type: DataTypes.TEXT,
    validate: {
      len: [0,100],
    },
  },
  sale_price:{
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  original_price:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  default_style:{
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 1
    }
  },
}, {
  indexes: [
    {
      fields: ['productId']
    },
  ],
  sequelize: seq
});

module.exports = Styles;