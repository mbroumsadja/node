import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

const UtilisateurRoles = sequelize.define(
  "UtilisateurRoles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    UtilisateurId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { timestamps: true }
);

export default UtilisateurRoles;
