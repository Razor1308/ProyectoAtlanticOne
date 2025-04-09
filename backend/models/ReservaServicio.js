const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Reserva = require('./Reserva');
const Servicio = require('./Servicio');

const ReservaServicio = sequelize.define('ReservaServicio', {
  id_reserva_servicio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_reserva: { type: DataTypes.INTEGER, allowNull: false },
  id_servicio: { type: DataTypes.INTEGER, allowNull: false },
  cantidad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
}, { tableName: 'reservas_servicios', timestamps: false });

ReservaServicio.belongsTo(Reserva, { foreignKey: 'id_reserva' });
ReservaServicio.belongsTo(Servicio, { foreignKey: 'id_servicio' });

module.exports = ReservaServicio;
