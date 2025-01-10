import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';


const Utilisateurs = sequelize.define(
  "Utilisateurs",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nomPrenom: {
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
    UniversiteId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    FaculteId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    DepartementId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    FiliereId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default Utilisateurs;
