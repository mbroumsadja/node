import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Departements = sequelize.define(
  "Departements",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nomDepartement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FaculteId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  { timestamps: true }
);

export default Departements;
