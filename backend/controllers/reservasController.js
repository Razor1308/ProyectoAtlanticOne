const Reserva = require('../models/Reserva');

exports.createReserva = async (req, res) => {
  try {
    const reserva = await Reserva.create(req.body);
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    await reserva.update(req.body);
    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    await reserva.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
