const TipoPromocion = require('../models/TipoPromocion');

// Obtener todos los registros
const getAll = async (req, res) => {
  try {
    const tipoPromociones = await TipoPromocion.findAll();
    res.json(tipoPromociones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un registro por ID
const getOne = async (req, res) => {
  try {
    const tipoPromocion = await TipoPromocion.findByPk(req.params.id);
    if (!tipoPromocion) {
      return res.status(404).json({ message: 'Tipo de promoción no encontrado' });
    }
    res.json(tipoPromocion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo registro
const create = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const nuevoTipoPromocion = await TipoPromocion.create({ nombre, descripcion });
    res.status(201).json(nuevoTipoPromocion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un registro
const update = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const tipoPromocion = await TipoPromocion.findByPk(req.params.id);
    if (!tipoPromocion) {
      return res.status(404).json({ message: 'Tipo de promoción no encontrado' });
    }
    tipoPromocion.nombre = nombre;
    tipoPromocion.descripcion = descripcion;
    await tipoPromocion.save();
    res.json(tipoPromocion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un registro
const deleteOne = async (req, res) => {
  try {
    const tipoPromocion = await TipoPromocion.findByPk(req.params.id);
    if (!tipoPromocion) {
      return res.status(404).json({ message: 'Tipo de promoción no encontrado' });
    }
    await tipoPromocion.destroy();
    res.json({ message: 'Tipo de promoción eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, create, update, deleteOne };
