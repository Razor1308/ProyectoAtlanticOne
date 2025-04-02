const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EstadoHabitacion = sequelize.define('EstadoHabitacion', {
  id_estado_habitacion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false }
}, { tableName: 'estados_habitacion', timestamps: false });

module.exports = EstadoHabitacion;
