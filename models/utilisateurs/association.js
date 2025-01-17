import Utilisateurs from "./Utilisateurs.js";
import Universites from "./Universites.js";
import Facultes from "./Facultes.js";
import Departements from "./Departements.js";
import Filieres from "./Filieres.js";
import Roles from "./Roles.js";
import UtilisateurRoles from "./UtilisateurRoles.js";


Utilisateurs.belongsTo(Universites, {foreignKey: 'UniversiteId'});
Universites.hasMany(Utilisateurs, {foreignKey: 'UniversiteId'});

Utilisateurs.belongsTo(Facultes, {foreignKey: 'FaculteId'});
Facultes.hasMany(Utilisateurs, {foreignKey: 'FaculteId'});

Utilisateurs.belongsTo(Departements, {foreignKey: 'DepartementId'});
Departements.hasMany(Utilisateurs, {foreignKey: 'DepartementId'});

Utilisateurs.belongsTo(Filieres, {foreignKey: 'FiliereId'});
Filieres.hasMany(Utilisateurs, {foreignKey: 'FiliereId'});

Utilisateurs.belongsToMany(Roles, {through : UtilisateurRoles, foreignKey: 'UtilisateurId'});
Roles.belongsToMany(Utilisateurs, {through : UtilisateurRoles, foreignKey: 'RoleId'});

Universites.hasMany(Facultes, {foreignKey: 'UniversiteId'});
Facultes.belongsTo(Universites, {foreignKey: 'UniversiteId'});

Facultes.hasMany(Departements, {foreignKey: 'FaculteId'});
Departements.belongsTo(Facultes, {foreignKey: 'FaculteId'});

Departements.hasMany(Filieres, {foreignKey: 'DepartementId'});
Filieres.belongsTo(Departements, {foreignKey: 'DepartementId'});


