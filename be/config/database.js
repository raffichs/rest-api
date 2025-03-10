import { Sequelize } from "sequelize";

const db = new Sequelize("notes_db", "root", "raffiganteng", {
  host: "34.101.175.228",
  dialect: "mysql",
});

export default db;
