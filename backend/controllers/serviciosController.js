const Servicio = require('../models/Servicio');

exports.createServicio = async (req, res) => {
  try {
    const servicio = await Servicio.create(req.body);
    res.status(201).json(servicio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getServicios = async (req, res) => {
  try {
    const servicios = await Servicio.findAll();
    res.status(200).json(servicios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getServicioById = async (req, res) => {
  try {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateServicio = async (req, res) => {
  try {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    await servicio.update(req.body);
    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteServicio = async (req, res) => {
  try {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    await servicio.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
