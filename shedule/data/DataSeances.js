import Utilisateurs from "../models/utilisateurs/Utilisateurs.js";
import Filieres from "../models/utilisateurs/Filieres.js";
import Roles from "../models/utilisateurs/Roles.js";
import UtilisateurRoles from "../models/utilisateurs/UtilisateurRoles.js";
import seances from "../models/seances/seances.js"

async function seedSeances() {
    try {

        const filieres = await Filieres.findAll();
        console.log(filieres)
        const EnseignantId = await Roles.findOne({where: {nomRole: 'enseignant'},attributes:['id']});

        const UserId = await UtilisateurRoles.findAll({where:{RoleId: EnseignantId.dataValues.id}});
        const ID =  UserId.map(ID =>(ID.dataValues.id))
        const enseignants = await Utilisateurs.findAll({
            where:{id:ID}
            
        });
       
        const Seances = await Promise.all([
            seances.create({
                jourSeance: new Date('2024-01-15'),
                nomSeance: "Algorithmique avancée",
                debut: '08:00:00',
                fin: '10:00:00',
                lieuCour: "Bâtiment Informatique",
                salleCour: "IF101",
                codeUnite: "ALG301",
                description: "Cours sur les algorithmes de graphes",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            seances.create({
                jourSeance: new Date('2024-01-15'),
                nomSeance: "Base de données",
                debut: '10:15:00',
                fin: '12:15:00',
                lieuCour: "Bâtiment Informatique",
                salleCour: "IF102",
                codeUnite: "BDD301",
                description: "TP sur les requêtes SQL avancées",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            // Séances pour la filière Médecine Générale
            seances.create({
                jourSeance: new Date('2024-01-16'),
                nomSeance: "Anatomie",
                debut: '09:00:00',
                fin: '11:00:00',
                lieuCour: "Faculté de Médecine",
                salleCour: "M201",
                codeUnite: "ANA501",
                description: "Étude du système nerveux",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            seances.create({
                jourSeance: new Date('2024-01-16'),
                nomSeance: "Physiologie",
                debut: '14:00:00',
                fin: '16:00:00',
                lieuCour: "Faculté de Médecine",
                salleCour: "M202",
                codeUnite: "PHY501",
                description: "Physiologie cardio-vasculaire",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            // Séances pour la filière Droit des Affaires
            seances.create({
                jourSeance: new Date('2024-01-17'),
                nomSeance: "Droit commercial",
                debut: '08:30:00',
                fin: '10:30:00',
                lieuCour: "Faculté de Droit",
                salleCour: "D301",
                codeUnite: "DCO201",
                description: "Les contrats commerciaux",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            seances.create({
                jourSeance: new Date('2024-01-17'),
                nomSeance: "Droit des sociétés",
                debut: '13:30:00',
                fin: '15:30:00',
                lieuCour: "Faculté de Droit",
                salleCour: "D302",
                codeUnite: "DSO201",
                description: "Création et gestion des sociétés",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            // Séances pour la filière Lettres Modernes
            seances.create({
                jourSeance: new Date('2024-01-18'),
                nomSeance: "Littérature française",
                debut: '09:30:00',
                fin: '11:30:00',
                lieuCour: "Faculté des Lettres",
                salleCour: "L401",
                codeUnite: "LIT401",
                description: "Le roman au XIXe siècle",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            seances.create({
                jourSeance: new Date('2024-01-18'),
                nomSeance: "Linguistique",
                debut: '14:30:00',
                fin: '16:30:00',
                lieuCour: "Faculté des Lettres",
                salleCour: "L402",
                codeUnite: "LIN401",
                description: "Analyse syntaxique",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            // Séances pour la filière Sciences Économiques
            seances.create({
                jourSeance: new Date('2024-01-19'),
                nomSeance: "Macroéconomie",
                debut: '08:00:00',
                fin: '10:00:00',
                lieuCour: "Faculté d'Économie",
                salleCour: "E601",
                codeUnite: "MAC601",
                description: "Politiques économiques",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            }),

            seances.create({
                jourSeance: new Date('2024-01-19'),
                nomSeance: "Économétrie",
                debut: '10:15:00',
                fin: '12:15:00',
                lieuCour: "Faculté d'Économie",
                salleCour: "E602",
                codeUnite: "ECO601",
                description: "Modèles de régression avancés",
                EnseignantId: enseignants[0].id,
                FiliereId: filieres[0].id
            })
        ]);

        console.log('Séances créées avec succès !');
        return Seances;

    } catch (error) {
        console.error('Erreur lors de la création des séances:', error);
        throw error;
    }
}

export default seedSeances();