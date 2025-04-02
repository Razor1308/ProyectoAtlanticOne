const express = require("express");
const Reserva = require("../models/Reserva");

const router = express.Router();

// Obtener todas las reservas
router.get("/", async (req, res) => {
  const reservas = await Reserva.findAll();
  res.json(reservas);
});

// Crear una nueva reserva
router.post("/", async (req, res) => {
  try {
    const reserva = await Reserva.create(req.body);
    res.status(201).json(reserva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
