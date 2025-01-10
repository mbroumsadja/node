import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Universites = sequelize.define(
  "Universites",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Universite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: true }
);

export default Universites;

