const EstadoReclamo = require('../models/EstadoReclamo');

// Obtener todos los registros
const getAll = async (req, res) => {
  try {
    const estadoReclamos = await EstadoReclamo.findAll();
    res.json(estadoReclamos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un registro por ID
const getOne = async (req, res) => {
  try {
    const estadoReclamo = await EstadoReclamo.findByPk(req.params.id);
    if (!estadoReclamo) {
      return res.status(404).json({ message: 'Estado de reclamo no encontrado' });
    }
    res.json(estadoReclamo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo registro
const create = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoEstadoReclamo = await EstadoReclamo.create({ nombre });
    res.status(201).json(nuevoEstadoReclamo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un registro
const update = async (req, res) => {
  try {
    const { nombre } = req.body;
    const estadoReclamo = await EstadoReclamo.findByPk(req.params.id);
    if (!estadoReclamo) {
      return res.status(404).json({ message: 'Estado de reclamo no encontrado' });
    }
    estadoReclamo.nombre = nombre;
    await estadoReclamo.save();
    res.json(estadoReclamo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un registro
const deleteOne = async (req, res) => {
  try {
    const estadoReclamo = await EstadoReclamo.findByPk(req.params.id);
    if (!estadoReclamo) {
      return res.status(404).json({ message: 'Estado de reclamo no encontrado' });
    }
    await estadoReclamo.destroy();
    res.json({ message: 'Estado de reclamo eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, create, update, deleteOne };
