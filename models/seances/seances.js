import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

const seances = sequelize.define(
  "Seances",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nomCours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codeUnite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    debut: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jourSeance: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lieuCour: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salleCour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EnseignantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FiliereId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    support:{
      type:DataTypes.STRING,
      allowNull:true,
      defaultValues:"aucun support"
    }
  },
  { timestamps: true }
);

export default seances;
