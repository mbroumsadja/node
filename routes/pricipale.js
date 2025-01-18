import express from "express";
import { getSeances } from "../controller/getSeances.js";
// import '../models/synchronisation.js';
const principale = express.Router();

principale.get('/',(req, res) =>{

    res.render('./layouts/index');

});

principale.get('/auth',(req,res) =>{
    const nom = req.cookies.nom;

    const seance = req.cookies.seance;

    res.render('./layouts/main',{seance:seance,nom:nom});
});

principale.post('/seances',getSeances,(res, req) =>{

});

export default principale;