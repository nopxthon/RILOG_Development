'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const superadmins = [
      {
        username: 'DevDzaky',
        password: await bcrypt.hash('Dzaky315', 10),
        first_name: 'Muhammad Dzaky',
        last_name: 'Naufal',
        email: 'dzaky@gmail.com',
        phone: '089601027926',
        profile_image: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        username: 'DevNopal06',
        password: await bcrypt.hash('Naufal802_', 10),
        first_name: 'Naufal',
        last_name: 'Radithya',
        email: 'radithya710@gmail.com',
        phone: '089653618274',
        profile_image: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        username: 'DevNaya',
        password: await bcrypt.hash('Nayos15', 10),
        first_name: 'Rafdi',
        last_name: 'Innaya',
        email: 'rafdiinnaya@gmail.com',
        phone: '085363747011',
        profile_image: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        username: 'DevOkta',
        password: await bcrypt.hash('Miawmiaw0', 10),
        first_name: 'Oktarira',
        last_name: 'Die Ananda',
        email: 'oktarira1710@gmail.com',
        phone: '081275809641',
        profile_image: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ];

    await queryInterface.bulkInsert('superadmins', superadmins, {});
    console.log('✅ Seeder superadmins berhasil dijalankan');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('superadmins', null, {});
    console.log('✅ Seeder superadmins berhasil di-rollback');
  },
};