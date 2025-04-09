const EstadoReserva = require('../models/EstadoReserva');

exports.createEstadoReserva = async (req, res) => {
  try {
    const estado = await EstadoReserva.create(req.body);
    res.status(201).json(estado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEstadoReservas = async (req, res) => {
  try {
    const estados = await EstadoReserva.findAll();
    res.status(200).json(estados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEstadoReservaById = async (req, res) => {
  try {
    const estado = await EstadoReserva.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }
    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEstadoReserva = async (req, res) => {
  try {
    const estado = await EstadoReserva.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }
    await estado.update(req.body);
    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEstadoReserva = async (req, res) => {
  try {
    const estado = await EstadoReserva.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }
    await estado.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
