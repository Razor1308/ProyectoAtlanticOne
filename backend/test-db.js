const sequelize = require("./config/database");

sequelize
  .authenticate()
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error("Error al conectar:", err));
