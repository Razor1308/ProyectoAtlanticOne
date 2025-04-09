const Pago = require('../models/Pago');

exports.createPago = async (req, res) => {
  try {
    const pago = await Pago.create(req.body);
    res.status(201).json(pago);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPagos = async (req, res) => {
  try {
    const pagos = await Pago.findAll();
    res.status(200).json(pagos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPagoById = async (req, res) => {
  try {
    const pago = await Pago.findByPk(req.params.id);
    if (!pago) {
      return res.status(404).json({ message: 'Pago no encontrado' });
    }
    res.status(200).json(pago);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePago = async (req, res) => {
  try {
    const pago = await Pago.findByPk(req.params.id);
    if (!pago) {
      return res.status(404).json({ message: 'Pago no encontrado' });
    }
    await pago.update(req.body);
    res.status(200).json(pago);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePago = async (req, res) => {
  try {
    const pago = await Pago.findByPk(req.params.id);
    if (!pago) {
      return res.status(404).json({ message: 'Pago no encontrado' });
    }
    await pago.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
