const MetodoPago = require('../models/MetodoPago');

// Obtener todos los registros
const getAll = async (req, res) => {
  try {
    const metodosPago = await MetodoPago.findAll();
    res.json(metodosPago);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un registro por ID
const getOne = async (req, res) => {
  try {
    const metodoPago = await MetodoPago.findByPk(req.params.id);
    if (!metodoPago) {
      return res.status(404).json({ message: 'Método de pago no encontrado' });
    }
    res.json(metodoPago);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo registro
const create = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoMetodoPago = await MetodoPago.create({ nombre });
    res.status(201).json(nuevoMetodoPago);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un registro
const update = async (req, res) => {
  try {
    const { nombre } = req.body;
    const metodoPago = await MetodoPago.findByPk(req.params.id);
    if (!metodoPago) {
      return res.status(404).json({ message: 'Método de pago no encontrado' });
    }
    metodoPago.nombre = nombre;
    await metodoPago.save();
    res.json(metodoPago);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un registro
const deleteOne = async (req, res) => {
  try {
    const metodoPago = await MetodoPago.findByPk(req.params.id);
    if (!metodoPago) {
      return res.status(404).json({ message: 'Método de pago no encontrado' });
    }
    await metodoPago.destroy();
    res.json({ message: 'Método de pago eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, create, update, deleteOne };
