const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Players = sequelize.define('players', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        pname: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        contact: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.STRING
        },
        updatedAt: {
            type: DataTypes.STRING
        }

    },
        {
            timestamps: false
        }
    );

    return Players

};