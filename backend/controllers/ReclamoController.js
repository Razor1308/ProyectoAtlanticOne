const Reclamo = require('../models/Reclamo');

// Obtener todos los registros
const getAll = async (req, res) => {
  try {
    const reclamos = await Reclamo.findAll();
    res.json(reclamos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un registro por ID
const getOne = async (req, res) => {
  try {
    const reclamo = await Reclamo.findByPk(req.params.id);
    if (!reclamo) {
      return res.status(404).json({ message: 'Reclamo no encontrado' });
    }
    res.json(reclamo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo registro
const create = async (req, res) => {
  try {
    const { clienteId, estadoReclamoId, descripcion } = req.body;
    const nuevoReclamo = await Reclamo.create({ clienteId, estadoReclamoId, descripcion });
    res.status(201).json(nuevoReclamo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un registro
const update = async (req, res) => {
  try {
    const { clienteId, estadoReclamoId, descripcion } = req.body;
    const reclamo = await Reclamo.findByPk(req.params.id);
    if (!reclamo) {
      return res.status(404).json({ message: 'Reclamo no encontrado' });
    }
    reclamo.clienteId = clienteId;
    reclamo.estadoReclamoId = estadoReclamoId;
    reclamo.descripcion = descripcion;
    await reclamo.save();
    res.json(reclamo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un registro
const deleteOne = async (req, res) => {
  try {
    const reclamo = await Reclamo.findByPk(req.params.id);
    if (!reclamo) {
      return res.status(404).json({ message: 'Reclamo no encontrado' });
    }
    await reclamo.destroy();
    res.json({ message: 'Reclamo eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, create, update, deleteOne };
