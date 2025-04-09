const TipoHabitacion = require('../models/TipoHabitacion');

exports.createTipoHabitacion = async (req, res) => {
  try {
    const tipo = await TipoHabitacion.create(req.body);
    res.status(201).json(tipo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTipoHabitaciones = async (req, res) => {
  try {
    const tipos = await TipoHabitacion.findAll();
    res.status(200).json(tipos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTipoHabitacionById = async (req, res) => {
  try {
    const tipo = await TipoHabitacion.findByPk(req.params.id);
    if (!tipo) {
      return res.status(404).json({ message: 'Tipo de habitación no encontrado' });
    }
    res.status(200).json(tipo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTipoHabitacion = async (req, res) => {
  try {
    const tipo = await TipoHabitacion.findByPk(req.params.id);
    if (!tipo) {
      return res.status(404).json({ message: 'Tipo de habitación no encontrado' });
    }
    await tipo.update(req.body);
    res.status(200).json(tipo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTipoHabitacion = async (req, res) => {
  try {
    const tipo = await TipoHabitacion.findByPk(req.params.id);
    if (!tipo) {
      return res.status(404).json({ message: 'Tipo de habitación no encontrado' });
    }
    await tipo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
