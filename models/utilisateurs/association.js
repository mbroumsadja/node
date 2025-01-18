import Utilisateurs from "./Utilisateurs.js";
import Departements from "./Departements.js";
import Filieres from "./Filieres.js";
import Niveaux from "./Niveaux.js";
import Universites from "./Universites.js";
import Facultes from  "./Facultes.js";

Utilisateurs.belongsTo(Departements, {foreignKey: 'DepartementId'});
Departements.hasMany(Utilisateurs, {foreignKey: 'DepartementId'});

Utilisateurs.belongsTo(Filieres, {foreignKey: 'UniversiteId'});
Universites.hasMany(Utilisateurs, {foreignKey: 'UniversiteId'});

Utilisateurs.belongsTo(Filieres, {foreignKey: 'FaculteId'});
Facultes.hasMany(Utilisateurs, {foreignKey: 'FaculteId'});

Departements.hasMany(Filieres, {foreignKey: 'DepartementId'});
Filieres.belongsTo(Departements, {foreignKey: 'DepartementId'});

Niveaux.belongsTo(Filieres,{foreignKey: 'FiliereId'});
Filieres.hasMany(Niveaux,{foreignKey: 'FiliereId'})

