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
    niveau: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: [
          [
            "Licence 1",
            "Licence 2",
            "Licence 3",
            "Master 1",
            "Master 2",
            "Doctorat 1",
            "Doctorat 2",
            "Doctorat 3",
            "Doctorat 4",
          ],
        ],
      },
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
