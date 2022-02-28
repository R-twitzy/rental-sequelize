'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mobil', {
      id_mobil: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomor_mobil: {
        type: Sequelize.STRING
      },
      merk: {
        type: Sequelize.STRING
      },
      jenis: {
        type: Sequelize.STRING
      },
      warna: {
        type: Sequelize.STRING
      },
      tahun_pembuatan: {
        type: Sequelize.STRING
      },
      biaya_sewa_per_hari: {
        type: Sequelize.DOUBLE
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mobils');
  }
};