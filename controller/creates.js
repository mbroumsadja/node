
import seances from '../models/seances/seances.js';
import Utilisateurs from '../models/utilisateurs/Utilisateurs.js';
import Universites from '../models/utilisateurs/Universites.js';
import Facultes from '../models/utilisateurs/Facultes.js';
import Departements from '../models/utilisateurs/Departements.js';
import Filieres from '../models/utilisateurs/Filieres.js';
import Niveaux from '../models/utilisateurs/Niveaux.js';

export const createSeances = async (req, res) =>{
    try{
        const {nomCours, codeUnite, debut, fin, jour, salle,lieu , enseignant, filiere , niveaux, support}=req.body
       const seance = await seances.create({
        nomCours:nomCours,
        codeUnite:codeUnite,
        debut:debut,
        fin:fin,
        jourCour:jour,
        lieuCour:lieu,
        salleCour: salle,
        EnseignantId:enseignant,
        FiliereId:filiere,
        NiveauxId:niveaux,
        support:support})


       res.redirect('/create/');

    }catch(err){

        res.cookie('message','erreur au niveau du serveur')
        res.redirect('/create/seance');
         console.log(err,'erreur survenue lors de la creation de la seance');
    }
};

export const createUtilisateur = async (req, res) =>{
    try {
        const { nom , prenom, email, numeroTel, password, UniversiteId, FaculteId, DepartementId} = req.body;
        const test = await Utilisateurs.findOne({where:[{email:email},{password:password}]});

        if(!test){
            const user = await Utilisateurs.create({
                nom:nom ,
                prenom:prenom, 
                email:email, 
                numeroTel:numeroTel,
                password:password,
                UniversiteId:UniversiteId, 
                FaculteId:FaculteId,
                DepartementId:DepartementId,
            });
        }else{
            res.cookie("messageSeance","la valeur entre dans l'un des ces champs existe deja  [email, numero telephone]")
        }
        res.redirect('/auth/register');

    } catch (err) {

        console.log(err,"erreur lors de enregistrement de l'utilisateur")
        res.redirect('/auth/register');
    }
};

export const createUniversite = async (req, res) =>{
    try {
        const {nomUniversite} = req.body;
        const universite = await Universites.create({nomUniversite:nomUniversite});

        res.cookie('succes',"enregistre avec sucess")
        res.redirect('/create/universite')
    } catch (error) {
        console.log(err,"erreur survenue lors de la enregistrement de universite");
        res.redirect('/create/universite');
    }
}

export const createFaculte = async (req, res) =>{
    try {

        const {nomFaculter,UniversiteId} = req.body;
        const faculte = await Facultes.create({
            nomFaculter:nomFaculter,
            UniversiteId:UniversiteId,
        });
        
        res.cookie('succes',"enregistre avec sucess")
        res.redirect('/create/');
    } catch (err) {
        console.log(err,"erreur survenue lors de la enregistrement de faculte");
        res.redirect('/create/faculte');
    }
};

export const createDepartement = async (req, res) =>{
    try {

        const {nomDepartement,FaculteId} = req.body;
        const departement = await Departements.create({
            nomDepartement:nomDepartement,
            FaculteId:FaculteId,
        });
        
        res.cookie('succes',"enregistre avec sucess")
        res.redirect('/create/');
    } catch (err) {
        console.log(err,"erreur survenue lors de la enregistrement de departement");
        res.redirect('/create/faculte');
    }
}

export const createFiliere = async (req, res) =>{
    try {

        const {nomFiliere,DepartementId} = req.body;
        const filiere = await Filieres.create({
            DepartementId:DepartementId,
            nomFiliere:nomFiliere,
        });
        
        res.cookie('succes',"enregistre avec sucess")
        res.redirect('/create/');
    } catch (err) {
        console.log(err,"erreur survenue lors de la enregistrement de filiere");
        res.redirect('/create/fililere');
    }
};

export const createNiveaux = async (req, res) =>{
    try {

        const {niveaux,FiliereId} = req.body;
        const niveau = await Niveaux.create({
            FiliereId:FiliereId,
            niveau:niveaux,
        });
        
        res.cookie('succes',"enregistre avec sucess")
        res.redirect('/create/');
    } catch (err) {
        console.log(err,"erreur survenue lors de la enregistrement des nivaux ");
        res.redirect('/create/niveau');
    }
};
