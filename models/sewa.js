'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sewa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi sewa -> mobil
      // key : id_mobil
      // parent : mobil, child: sewa
      // tipe: one to many
      this.belongsTo(models.mobil, {
        foreignKey: "id_mobil",
        as: "mobil"
      })

      // relasi sewa -> karyawan
      // key : id_karyawan
      // parent : karyawan, child: sewa
      // tipe: one to many
      this.belongsTo(models.karyawan, {
        foreignKey: "id_karyawan",
        as: "karyawan"
      })

      // relasi sewa -> pelanggan
      // key : id_pelanggan
      // parent : pelanggan, child: sewa
      // tipe: one to many
      this.belongsTo(models.pelanggan, {
        foreignKey: "id_pelanggan",
        as: "pelanggan"
      })
    }
  }
  sewa.init({
    id_sewa:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tgl_sewa: DataTypes.DATE,
    tgl_kembali: DataTypes.DATE,
    total_bayar: DataTypes.DOUBLE,
    id_mobil: DataTypes.INTEGER,
    id_karyawan: DataTypes.INTEGER,
    id_pelanggan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sewa',
    tableName: 'sewa'
  });
  return sewa;
};