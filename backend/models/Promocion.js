const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const TipoPromocion = require('./TipoPromocion');

const Promocion = sequelize.define('Promocion', {
  id_promocion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: true },
  id_tipo_promocion: { type: DataTypes.INTEGER, allowNull: false },
  descuento: { type: DataTypes.DECIMAL(5,2), allowNull: false },
  fecha_inicio: { type: DataTypes.DATEONLY, allowNull: false },
  fecha_fin: { type: DataTypes.DATEONLY, allowNull: false }
}, { tableName: 'promociones', timestamps: false });

Promocion.belongsTo(TipoPromocion, { foreignKey: 'id_tipo_promocion' });

module.exports = Promocion;
