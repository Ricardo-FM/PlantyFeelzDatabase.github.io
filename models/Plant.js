'use strict'

module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define('Plant', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    methodOfTransport: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    // The password cannot be null
    arrivalDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  })
  Plant.associate = (models) => {
    // associations can be defined here
    Plant.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    })
  }
  return Plant
}
