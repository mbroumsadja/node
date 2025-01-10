import { DataTypes} from "sequelize";
import sequelize from "../../config/db.js";

const Universites = sequelize.define(
  "Universites",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
autoIncrement:true
    },
    nomUniversite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: true }
);

export default Universites;

