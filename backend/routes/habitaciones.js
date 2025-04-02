const express = require("express");
const Habitacion = require("../models/Habitacion");

const router = express.Router();

// Obtener todas las habitaciones
router.get("/", async (req, res) => {
  const habitaciones = await Habitacion.findAll();
  res.json(habitaciones);
});

// Crear una nueva habitación
router.post("/", async (req, res) => {
  try {
    const habitacion = await Habitacion.create(req.body);
    res.status(201).json(habitacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
