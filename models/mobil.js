'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mobil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mobil.init({
    id_mobil:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomor_mobil: DataTypes.STRING,
    merk: DataTypes.STRING,
    jenis: DataTypes.STRING,
    warna: DataTypes.STRING,
    tahun_pembuatan: DataTypes.STRING,
    biaya_sewa_per_hari: DataTypes.DOUBLE,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mobil',
    tableName: 'mobil'
  });
  return mobil;
};