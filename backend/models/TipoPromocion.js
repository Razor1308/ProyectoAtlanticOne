const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoPromocion = sequelize.define('TipoPromocion', {
  id_tipo_promocion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false }
}, { tableName: 'tipospromocion', timestamps: false });

module.exports = TipoPromocion;
