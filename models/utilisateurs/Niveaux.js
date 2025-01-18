import { DataTypes } from 'sequelize';
import sequelize from "../../config/db.js";

const Niveaux =  sequelize.define("Niveau",{
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
    FiliereId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  },{ timestamps: true });

export default Niveaux