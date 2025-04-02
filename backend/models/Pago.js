const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Reserva = require('./Reserva');

const Pago = sequelize.define('Pago', {
  id_pago: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_reserva: { type: DataTypes.INTEGER, allowNull: false },
  monto: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  fecha_pago: { type: DataTypes.DATE, allowNull: false },
  metodo_pago: { type: DataTypes.STRING(50), allowNull: false }
}, { tableName: 'pagos', timestamps: false });

Pago.belongsTo(Reserva, { foreignKey: 'id_reserva' });

module.exports = Pago;
