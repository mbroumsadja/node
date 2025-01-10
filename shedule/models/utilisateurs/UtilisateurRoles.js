import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

const UtilisateurRoles = sequelize.define(
  "UtilisateurRoles",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    UtilisateurId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    RoleId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  { timestamps: true }
);

export default UtilisateurRoles;
