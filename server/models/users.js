// This script is the model for the postgres file "users" 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        is_admin: {
            type: DataTypes.STRING(1),
            allowNull: false,
            defaultValue: "0"
        }
    }, {
        tableName: 'users'
    });
};