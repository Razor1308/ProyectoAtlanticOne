const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Rol = require('./Rol');

const Usuario = sequelize.define('Usuario', {
  id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  correo: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  hashed_password: { type: DataTypes.STRING(255), allowNull: false },
  id_rol: { type: DataTypes.INTEGER, allowNull: false },
  salt: { type: DataTypes.STRING(255), allowNull: false }
}, { tableName: 'usuarios', timestamps: false });

Usuario.belongsTo(Rol, { foreignKey: 'id_rol' });

module.exports = Usuario;