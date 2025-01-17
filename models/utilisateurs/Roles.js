import {  DataTypes } from 'sequelize';
import sequelize from '../../config/db.js'; 

const Roles = sequelize.define(
  "Roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
autoIncrement:true
    },
    nomRole: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'user',
      validate:{
        isIn: [['admin', 'enseignant', 'deleguer', 'etudiant']]
      }
    },
  },
  { timestamps: true }
);

export default Roles;
