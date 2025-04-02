const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoHabitacion = sequelize.define('TipoHabitacion', {
  id_tipo_habitacion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: true }
}, { tableName: 'tipos_habitacion', timestamps: false });

module.exports = TipoHabitacion;
