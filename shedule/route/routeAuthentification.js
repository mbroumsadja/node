import express from "express";
import { Universite,Faculte,Departement,Filiere} from "../controller/getAuth.js";
// import '../models/synchronisation.js'
// import seedUtilisateurs from '../data/DataUtilisateurs.js';
// import seedSeances from '../data/DataSeances.js';

const route = express.Router();

route.get('/',(req, res)=>{
    res.status(200).render('layouts/welcom')
});

// route.get('/auth/creation/compte', async (req, res)=>{
//     const Universites = await Universite();
//     const Facultes = await Faculte();
//     const Departements = await Departement();
//     const Filieres = await Filiere();
//     res.status(200).render('auth/signup',{
//          Universites:Universites,
//          Facultes:Facultes,
//          Departements:Departements,
//          Filieres:Filieres
//         });
// });

route.get('/auth/creation/compte', async (req, res) => {
    try {
        const universites = await Universite();
        const facultes = await Faculte();
        const departements = await Departement();
        const filieres = await Filiere();

        res.status(200).render('auth/signup', {
            universites,
            facultes,
            departements,
            filieres
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).render('error', { message: 'Error loading page' });
    }
});

route.get('/auth/authentification',(req, res)=>{
    res.status(200).render('auth/login');
});

route.get('/auth/authentification/google',(req, res)=>{
    res.status(200).render('auth/login')
});

export default route;