'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('karyawans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_karyawan: {
        type: Sequelize.STRING
      },
      alamat_karyawan: {
        type: Sequelize.STRING
      },
      kontak: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
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
    await queryInterface.dropTable('karyawans');
  }
};