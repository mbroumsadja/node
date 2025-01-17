import {  DataTypes } from "sequelize";
import sequelize from "../../config/db.js"; 

const Facultes = sequelize.define(
  "Facultes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
autoIncrement:true
    },
    nomFaculte: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UniversiteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Facultes;
