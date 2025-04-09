const PromocionReserva = require('../models/PromocionReserva');

// Obtener todos los registros
const getAll = async (req, res) => {
  try {
    const promocionesReservas = await PromocionReserva.findAll();
    res.json(promocionesReservas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un registro por ID
const getOne = async (req, res) => {
  try {
    const promocionReserva = await PromocionReserva.findByPk(req.params.id);
    if (!promocionReserva) {
      return res.status(404).json({ message: 'Promoción de reserva no encontrada' });
    }
    res.json(promocionReserva);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo registro
const create = async (req, res) => {
  try {
    const { promocionId, reservaId } = req.body;
    const nuevaPromocionReserva = await PromocionReserva.create({ promocionId, reservaId });
    res.status(201).json(nuevaPromocionReserva);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un registro
const update = async (req, res) => {
  try {
    const { promocionId, reservaId } = req.body;
    const promocionReserva = await PromocionReserva.findByPk(req.params.id);
    if (!promocionReserva) {
      return res.status(404).json({ message: 'Promoción de reserva no encontrada' });
    }
    promocionReserva.promocionId = promocionId;
    promocionReserva.reservaId = reservaId;
    await promocionReserva.save();
    res.json(promocionReserva);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un registro
const deleteOne = async (req, res) => {
  try {
    const promocionReserva = await PromocionReserva.findByPk(req.params.id);
    if (!promocionReserva) {
      return res.status(404).json({ message: 'Promoción de reserva no encontrada' });
    }
    await promocionReserva.destroy();
    res.json({ message: 'Promoción de reserva eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, create, update, deleteOne };
