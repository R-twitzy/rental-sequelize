'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sewas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tgl_sewa: {
        type: Sequelize.DATE
      },
      tgl_kembali: {
        type: Sequelize.DATE
      },
      total_bayar: {
        type: Sequelize.DOUBLE
      },
      id_mobil: {
        type: Sequelize.INTEGER
      },
      id_karyawan: {
        type: Sequelize.INTEGER
      },
      id_pelanggan: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('sewas');
  }
};