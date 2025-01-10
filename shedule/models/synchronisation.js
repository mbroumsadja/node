import "./seances/association.js";
import "./utilisateurs/association.js";
import sequelize from "../config/db.js";  

sequelize.sync({ force: true }).then(() => {
  console.log("LES TABLES ONT ETE CREE AVEC SUCCES");
}).catch((err) => {
  console.log("Erreu: PROBLEME LORS DE LA CREATION DES TABLES", err);
});

