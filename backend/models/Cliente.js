const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  id_cliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  correo: { type: DataTypes.STRING(100), unique: true, allowNull: true },
  telefono: { type: DataTypes.STRING(20), allowNull: true },
  documento_identidad: { type: DataTypes.STRING(20), allowNull: false }
}, { tableName: 'clientes', timestamps: false });

module.exports = Cliente;
