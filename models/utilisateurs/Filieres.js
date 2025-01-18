import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

const Filieres = sequelize.define(
  "Filieres",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
autoIncrement:true
    },
    nomFiliere: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DepartementId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { timestamps: true }
);

export default Filieres;
