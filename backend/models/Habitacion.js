const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const EstadoHabitacion = require('./EstadoHabitacion');
const TipoHabitacion = require('./TipoHabitacion');

const Habitacion = sequelize.define('Habitacion', {
  id_habitacion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  numero: { type: DataTypes.STRING(10), allowNull: false, unique: true },
  id_tipo_habitacion: { type: DataTypes.INTEGER, allowNull: false },
  id_estado_habitacion: { type: DataTypes.INTEGER, allowNull: false },
  precio: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, { tableName: 'habitaciones', timestamps: false });

Habitacion.belongsTo(EstadoHabitacion, { foreignKey: 'id_estado_habitacion' });
Habitacion.belongsTo(TipoHabitacion, { foreignKey: 'id_tipo_habitacion' });

module.exports = Habitacion;
