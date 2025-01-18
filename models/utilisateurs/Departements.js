import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Departements = sequelize.define(
  "Departements",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
autoIncrement:true
    },
    nomDepartement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   FaculteId:{
    type: DataTypes.INTEGER,
    allowNull: false,
   }
  },
  { timestamps: true }
);

export default Departements;
