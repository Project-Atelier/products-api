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
      fields: ['current_product_id'],
      using: 'hash'
    },
  ],
  sequelize: seq
});




module.exports = Related;