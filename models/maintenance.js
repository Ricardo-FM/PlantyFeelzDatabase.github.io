'use strict';

module.exports = (sequelize, DataTypes) => {
    const Maintenance = sequelize.define('Maintenance', {
        water: {
            type: DataTypes.STRING,
            allowNull: true
        },
        temperature: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        light: {
            type: DataTypes.STRING,
            allowNull: true
        },
        humidity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        soil: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Maintenance.associate = models => {
        Maintenance.belongsTo(models.Maintenance, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Maintenance;
}