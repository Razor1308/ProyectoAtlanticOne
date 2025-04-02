const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hoteldb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
