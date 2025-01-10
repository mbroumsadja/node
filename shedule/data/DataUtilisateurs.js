import Utilisateurs from "../models/utilisateurs/Utilisateurs.js";
import Universites from "../models/utilisateurs/Universites.js";
import Facultes from "../models/utilisateurs/Facultes.js";
import Departements from "../models/utilisateurs/Departements.js";
import Filieres from "../models/utilisateurs/Filieres.js";
import Roles from "../models/utilisateurs/Roles.js";
import UtilisateurRoles from "../models/utilisateurs/UtilisateurRoles.js";


async function seedUtilisateurs() {
    try {
    
        const universites = await Promise.all([
            Universites.create({ nomUniversite: "Université de Lyon" }),
            Universites.create({ nomUniversite: "Université de Paris" }),
            Universites.create({ nomUniversite: "Université de Marseille" }),
            Universites.create({ nomUniversite: "Université de Bordeaux" }),
            Universites.create({ nomUniversite: "Université de Toulouse" })
        ]);

        
        const facultes = await Promise.all([
            Facultes.create({ nomFaculte: "Faculté des Sciences", UniversiteId: universites[0].id }),
            Facultes.create({ nomFaculte: "Faculté de Médecine", UniversiteId: universites[1].id }),
            Facultes.create({ nomFaculte: "Faculté de Droit", UniversiteId: universites[2].id }),
            Facultes.create({ nomFaculte: "Faculté des Lettres", UniversiteId: universites[3].id }),
            Facultes.create({ nomFaculte: "Faculté d'Économie", UniversiteId: universites[4].id })
        ]);

       
        const departements = await Promise.all([
            Departements.create({ nomDepartement: "Département d'Informatique", FaculteId: facultes[0].id }),
            Departements.create({ nomDepartement: "Département de Biologie", FaculteId: facultes[1].id }),
            Departements.create({ nomDepartement: "Département de Droit Public", FaculteId: facultes[2].id }),
            Departements.create({ nomDepartement: "Département de Littérature", FaculteId: facultes[3].id }),
            Departements.create({ nomDepartement: "Département de Finance", FaculteId: facultes[4].id })
        ]);

        
        const filieres = await Promise.all([
            Filieres.create({ niveau: "Licence 3", nomFiliere: "Informatique Appliquée", DepartementId: departements[0].id }),
            Filieres.create({ niveau: "Master 2", nomFiliere: "Médecine Générale", DepartementId: departements[1].id }),
            Filieres.create({ niveau: "Licence 2", nomFiliere: "Droit des Affaires", DepartementId: departements[2].id }),
            Filieres.create({ niveau: "Master 1", nomFiliere: "Lettres Modernes", DepartementId: departements[3].id }),
            Filieres.create({ niveau: "Doctorat 1", nomFiliere: "Sciences Économiques", DepartementId: departements[4].id })
        ]);

        // Create 4 Roles (as defined in the model)
        const roles = await Promise.all([
            Roles.create({ nomRole: 'admin' }),
            Roles.create({ nomRole: 'enseignant' }),
            Roles.create({ nomRole: 'deleguer' }),
            Roles.create({ nomRole: 'etudiant' })
        ]);

        // Create 5 Utilisateurs
        const utilisateurs = await Promise.all([
            Utilisateurs.create({
                nomPrenom: "Admin Système",
                email: "admin.systeme@univ-lyon.fr",
                numeroTel: 123456789,
                password: "hashedPassword123",
                UniversiteId: universites[0].id,
                FaculteId: facultes[0].id,
                DepartementId: departements[0].id,
                FiliereId: filieres[0].id
            }),
            
            Utilisateurs.create({
                nomPrenom: "Marie Dubois",
                email: "marie.dubois@univ-paris.fr",
                numeroTel: 234567891,
                password: "hashedPassword456",
                UniversiteId: universites[1].id,
                FaculteId: facultes[1].id,
                DepartementId: departements[1].id,
                FiliereId: filieres[1].id
            }),
            Utilisateurs.create({
                nomPrenom: "Pierre Martin",
                email: "pierre.martin@univ-marseille.fr",
                numeroTel: 345678912,
                password: "hashedPassword789",
                UniversiteId: universites[2].id,
                FaculteId: facultes[2].id,
                DepartementId: departements[2].id,
                FiliereId: filieres[2].id
            }),
            Utilisateurs.create({
                nomPrenom: "Sophie Laurent",
                email: "sophie.laurent@univ-bordeaux.fr",
                numeroTel: 456789123,
                password: "hashedPasswordABC",
                UniversiteId: universites[3].id,
                FaculteId: facultes[3].id,
                DepartementId: departements[3].id,
                FiliereId: filieres[3].id
            }),
            Utilisateurs.create({
                nomPrenom: "Lucas Bernard",
                email: "lucas.bernard@univ-toulouse.fr",
                numeroTel: 567891234,
                password: "hashedPasswordDEF",
                UniversiteId: universites[4].id,
                FaculteId: facultes[4].id,
                DepartementId: departements[4].id,
                FiliereId: filieres[4].id
            })
        ]);

        // Create UtilisateurRoles associations
        await Promise.all([
            // Admin
            UtilisateurRoles.create({
                UtilisateurId: utilisateurs[0].id,
                RoleId: roles[0].id // admin
            }),
            // Enseignant
            UtilisateurRoles.create({
                UtilisateurId: utilisateurs[1].id,
                RoleId: roles[1].id // enseignant
            }),
            // Deleguer
            UtilisateurRoles.create({
                UtilisateurId: utilisateurs[2].id,
                RoleId: roles[2].id // deleguer
            }),
            // Etudiant
            UtilisateurRoles.create({
                UtilisateurId: utilisateurs[3].id,
                RoleId: roles[3].id // etudiant
            }),
            // Un autre étudiant
            UtilisateurRoles.create({
                UtilisateurId: utilisateurs[4].id,
                RoleId: roles[3].id // etudiant
            })
        ]);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
}


export default seedUtilisateurs();