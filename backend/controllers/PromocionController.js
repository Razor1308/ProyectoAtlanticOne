const Promocion = require('../models/Promocion');

// Obtener todos los registros
const getAll = async (req, res) => {
  try {
    const promociones = await Promocion.findAll();
    res.json(promociones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un registro por ID
const getOne = async (req, res) => {
  try {
    const promocion = await Promocion.findByPk(req.params.id);
    if (!promocion) {
      return res.status(404).json({ message: 'Promoción no encontrada' });
    }
    res.json(promocion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo registro
const create = async (req, res) => {
  try {
    const { nombre, descripcion, descuento } = req.body;
    const nuevaPromocion = await Promocion.create({ nombre, descripcion, descuento });
    res.status(201).json(nuevaPromocion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un registro
const update = async (req, res) => {
  try {
    const { nombre, descripcion, descuento } = req.body;
    const promocion = await Promocion.findByPk(req.params.id);
    if (!promocion) {
      return res.status(404).json({ message: 'Promoción no encontrada' });
    }
    promocion.nombre = nombre;
    promocion.descripcion = descripcion;
    promocion.descuento = descuento;
    await promocion.save();
    res.json(promocion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un registro
const deleteOne = async (req, res) => {
  try {
    const promocion = await Promocion.findByPk(req.params.id);
    if (!promocion) {
      return res.status(404).json({ message: 'Promoción no encontrada' });
    }
    await promocion.destroy();
    res.json({ message: 'Promoción eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, create, update, deleteOne };
