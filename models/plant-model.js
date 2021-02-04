'use strict';

module.exports = (sequelize, DataTypes) => {
    const Plants = sequelize.define('Plants', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Plants.associate = models => {
        Plants.belongsTo(models.Plants, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Plants;
}