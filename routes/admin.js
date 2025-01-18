import express from "express";
import { createDepartement, createFaculte, createFiliere, createNiveaux, createSeances , createUniversite, createUtilisateur} from "../controller/creates.js";

const admin = express.Router();

admin.get('/create/seance',(req,res) =>{
    res.render('./form/seance');
});

admin.get('/admin',(req, res) =>{
    res.render('./layouts/admin')
});
admin.get('/create',(req,res)=>{
    res.render('./layouts/create');
});
admin.get('/create/universite',(req, res)=>{
    res.render('./form/universite');
});
admin.get('/create/Departement',(req, res)=>{
    res.render('./form/departement');
});
admin.get('/create/faculte',(req, res)=>{
    res.render('./form/faculte');
});
admin.get('/create/filiere',(req, res)=>{
    res.render('./form/filiere');
});
admin.get('/create/niveau',(req, res)=>{
    res.render('./form/niveaux');
});
admin.post('/register',createUtilisateur);
admin.post('/seance',createSeances)
admin.post('/universite',createUniversite);
admin.post('/faculte',createFaculte);
admin.post('/departement',createDepartement);
admin.post('/filiere',createFiliere);
admin.post('/niveau',createNiveaux)

export default admin