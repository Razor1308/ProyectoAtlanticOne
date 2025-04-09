const ReservaServicio = require('../models/ReservaServicio');

exports.createReservaServicio = async (req, res) => {
  try {
    const reservaServicio = await ReservaServicio.create(req.body);
    res.status(201).json(reservaServicio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReservaServicios = async (req, res) => {
  try {
    const reservaServicios = await ReservaServicio.findAll();
    res.status(200).json(reservaServicios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReservaServicioById = async (req, res) => {
  try {
    const reservaServicio = await ReservaServicio.findByPk(req.params.id);
    if (!reservaServicio) {
      return res.status(404).json({ message: 'Reserva de servicio no encontrada' });
    }
    res.status(200).json(reservaServicio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReservaServicio = async (req, res) => {
  try {
    const reservaServicio = await ReservaServicio.findByPk(req.params.id);
    if (!reservaServicio) {
      return res.status(404).json({ message: 'Reserva de servicio no encontrada' });
    }
    await reservaServicio.update(req.body);
    res.status(200).json(reservaServicio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteReservaServicio = async (req, res) => {
  try {
    const reservaServicio = await ReservaServicio.findByPk(req.params.id);
    if (!reservaServicio) {
      return res.status(404).json({ message: 'Reserva de servicio no encontrada' });
    }
    await reservaServicio.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
