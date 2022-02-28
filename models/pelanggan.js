'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pelanggan.init({
    id_pelanggan:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_pelanggan: DataTypes.STRING,
    alamat_pelanggan: DataTypes.STRING,
    kontak: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pelanggan',
    tableName: 'pelanggan'
  });
  return pelanggan;
};