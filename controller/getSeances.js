import seances from "../models/seances/seances.js"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const getSeances = async (req, res) => {
    try{

        const {nom,DepartementId, FiliereId, NiveauxId} = req.body

        const seance = await seances.findAll(
            {where:[
                {FiliereId: FiliereId},
                {NiveauxId: NiveauxId}
            ]}
        );

        const token = jwt.sign({nom},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'24h'});

        res.cookie("token",token,{maxAge:1000000});
        const Seance = seance.map(data => (data.dataValues))
        res.cookie("seance",Seance);
        res.cookie("nom",nom);
        res.redirect('/auth');

    }catch(err){
        res.redirect('/');
       console.log('erreur lors de la recuperation des seances',err);
    }
}
