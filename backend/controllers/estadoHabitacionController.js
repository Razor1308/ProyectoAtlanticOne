const EstadoHabitacion = require('../models/EstadoHabitacion');

exports.createEstadoHabitacion = async (req, res) => {
  try {
    const estado = await EstadoHabitacion.create(req.body);
    res.status(201).json(estado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEstadoHabitaciones = async (req, res) => {
  try {
    const estados = await EstadoHabitacion.findAll();
    res.status(200).json(estados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEstadoHabitacionById = async (req, res) => {
  try {
    const estado = await EstadoHabitacion.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }
    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEstadoHabitacion = async (req, res) => {
  try {
    const estado = await EstadoHabitacion.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }
    await estado.update(req.body);
    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEstadoHabitacion = async (req, res) => {
  try {
    const estado = await EstadoHabitacion.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }
    await estado.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
