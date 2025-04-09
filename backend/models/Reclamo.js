const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');
const EstadoReclamo = require('./EstadoReclamo');

const Reclamo = sequelize.define('Reclamo', {
  id_reclamo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_cliente: { type: DataTypes.INTEGER, allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: false },
  fecha_creacion: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  id_estado_reclamo: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'reclamos', timestamps: false });

Reclamo.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Reclamo.belongsTo(EstadoReclamo, { foreignKey: 'id_estado_reclamo' });

module.exports = Reclamo;
