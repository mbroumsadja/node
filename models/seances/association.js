import Utilisateurs from "../utilisateurs/Utilisateurs.js";
import Filieres from "../utilisateurs/Filieres.js";
import seances from "./seances.js";
import Niveaux from "../utilisateurs/Niveaux.js";


 
seances.hasMany(Utilisateurs, {foreignKey: 'EnseignantId'});
Utilisateurs.belongsTo(seances, {foreignKey: 'EnseignantId'});

Filieres.hasMany(seances, {foreignKey : 'FiliereId'});
seances.belongsTo(seances, {foreignKey : 'FiliereId'});

Niveaux.belongsTo(seances,{foreignKey: 'NiveauxId'});
seances.hasMany(Niveaux,{foreignKey: 'NiveauxId'})
