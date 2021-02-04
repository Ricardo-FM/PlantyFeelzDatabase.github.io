'use strict';

module.exports = (sequelize, DataTypes) => {
    const Genus = sequelize.define('Genus', {
        genus_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Genus.associate = models => {
        Genus.belongsTo(models.Genus, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Genus;
}