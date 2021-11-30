const { Model, DataTypes } = require('sequelize');
const seq = require('../index.js');


class Features extends Model {}

Features.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    references:{
      model:"Products",
      key: "id"
    },
  },
  feature:{
    type: DataTypes.TEXT,
  },
  value:{
    type: DataTypes.TEXT,
  },

}, {
  sequelize: seq
});

module.exports = Features;