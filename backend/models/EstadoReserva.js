const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EstadoReserva = sequelize.define('EstadoReserva', {
  id_estado_reserva: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false }
}, { tableName: 'estados_reserva', timestamps: false });

module.exports = EstadoReserva;
