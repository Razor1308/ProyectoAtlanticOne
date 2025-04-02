const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');
const Habitacion = require('./Habitacion');
const EstadoReserva = require('./EstadoReserva');

const Reserva = sequelize.define('Reserva', {
  id_reserva: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_cliente: { type: DataTypes.INTEGER, allowNull: false },
  id_habitacion: { type: DataTypes.INTEGER, allowNull: false },
  fecha_ingreso: { type: DataTypes.DATEONLY, allowNull: false },
  fecha_salida: { type: DataTypes.DATEONLY, allowNull: false },
  id_estado_reserva: { type: DataTypes.INTEGER, allowNull: false },
  monto_total: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, { tableName: 'reservas', timestamps: false });

Reserva.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Reserva.belongsTo(Habitacion, { foreignKey: 'id_habitacion' });
Reserva.belongsTo(EstadoReserva, { foreignKey: 'id_estado_reserva' });

module.exports = Reserva;
