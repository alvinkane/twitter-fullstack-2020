'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tweet.hasMany(models.Reply, { foreignKey: 'TweetId' })
      Tweet.hasMany(models.Like, { foreignKey: 'TweetId', onDelete: 'cascade', hooks: true })
      Tweet.belongsTo(models.User, { foreignKey: 'UserId' })
    }
  }
  Tweet.init(
    {
      UserId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Tweet',
      tableName: 'Tweets',
      underscored: true
    }
  )
  return Tweet
}
