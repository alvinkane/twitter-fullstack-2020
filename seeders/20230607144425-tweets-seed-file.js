'use strict'

const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      'SELECT id FROM Users;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    await queryInterface.bulkInsert('Tweets',
      Array.from({ length: 50 }, () => ({
        user_id: users[Math.floor(Math.random() * users.length)].id,
        description: faker.lorem.text(),
        created_at: new Date(),
        updated_at: new Date()
      }))
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tweets', {})
  }
}