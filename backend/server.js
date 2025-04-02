require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const Usuario = require("./models/Usuario");
const Habitacion = require("./models/Habitacion");
const Reserva = require("./models/Reserva");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/usuarios", require("./routes/usuarios"));
app.use("/habitaciones", require("./routes/habitaciones"));
app.use("/reservas", require("./routes/reservas"));

// Sincronizar Base de Datos
sequelize.sync()
  .then(() => console.log("Base de datos sincronizada"))
  .catch(err => console.error("Error al sincronizar DB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
