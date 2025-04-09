const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EstadoReclamo = sequelize.define('EstadoReclamo', {
  id_estado_reclamo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false }
}, { tableName: 'estadoreclamo', timestamps: false });

module.exports = EstadoReclamo;
