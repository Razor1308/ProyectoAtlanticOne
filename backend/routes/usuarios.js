const express = require("express");
const Usuario = require("../models/Usuario");

const router = express.Router();

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

// Crear un usuario
router.post("/", async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
