import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';


const Utilisateurs = sequelize.define(
  "Utilisateurs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    numeroTel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UniversiteId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    FaculteId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    DepartementId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
  },
  { timestamps: true }
);

export default Utilisateurs;
