import Utilisateurs from "../utilisateurs/Utilisateurs.js";
import Filieres from "../utilisateurs/Filieres.js";
import seances from "./seances.js";

seances.hasMany(Utilisateurs, {foreignKey: 'EnseignantId'});
Utilisateurs.belongsTo(seances, {foreignKey: 'EnseignantId'});

seances.belongsTo(Filieres, {foreignKey: 'FiliereId'});
Filieres.hasMany(seances, {foreignKey: 'FiliereId'});

export { seances};