'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const emojis = ['😀', '😎', '👍', '👎', '😍', '🤩', '🤔', '😡', '😢', '😱', '😂', '😐']

    await queryInterface.bulkInsert(
      'emojis',
      emojis.map(
        item => ({
          unicode: item,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
        {}
      )
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('emojis', null, {})
  },
}
