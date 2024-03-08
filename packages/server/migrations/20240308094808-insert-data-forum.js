'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const forums = ['Новые игры', 'Геймдизайнеры', 'Технологии'];

    const insertedForums = await queryInterface.bulkInsert('forums',
      forums.map((title, index) => ({
        id: index,
        title,
        topic_count: 0,
        message_count: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      , {});

    console.log(insertedForums);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('forums', null, {});
  }
};
