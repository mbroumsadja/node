import {  DataTypes } from "sequelize";
import sequelize from "../../config/db.js"; 

const Facultes = sequelize.define(
  "Facultes",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nomFaculte: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UniversiteId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Facultes;
