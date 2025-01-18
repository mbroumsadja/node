import Utilisateurs from '../models/utilisateurs/Utilisateurs.js'
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

export const register = async (req, res)=>{

    try {  
        const  {nom ,prenom,email,numeroTel ,password, UniversiteId,FaculteId, DepartementId,FiliereId } = req.body ;

        const hashPassword = bcrypt.hash(password,10); 

        const user = await Utilisateurs.create(
            nom ,
            prenom,
            email,
            numeroTel ,
            hashPassword,
            UniversiteId,
            FaculteId, 
            DepartementId,
            FiliereId);
            
        const token =jwt.sign(
            {userId : user.id},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'24h'}
        );

        res.cookie("username", nom, {
            httpOnly:true,
        });
         res.cookie("token", token, {
                            httpOnly:true,
                            secure: true,
                            maxAge: 1000000,
                            signed:true
                        });
      res.redirect('/auth');
    } catch (error) {

        res.cookie("smessageError",'mots  de passe ou email existe deja');
        console.log('erreur lors de enregistrement ',error);
        res.redirect('/');
    }
};

export const login = async (req, res) =>{

    try {
        const {email, password} = req.body;

        const user = await Utilisateurs.findOne({where:{email}, raw:true});

        if(user){

            res.cookie("username", nom, {
                httpOnly:true,
            });
        };


         const validator =  bcrypt.compare(password,user.password);

        if(!validator){
            res.cookie("lmessage", 'Mot de passe incorrect', {
                httpOnly: true
              });
              return res.redirect('/auth/login');
        }
                        const token =jwt.sign({user},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'24h'});
                        res.cookie("token", token, {
                            httpOnly:true,

                            maxAge: 1000000,
                            signed:true
                        })
                        res.redirect('/auth');

                        console.log('desole le mots n\'est pas correct');
}catch (error) {
    res.cookie("lmessageError", 'Erreur lors de la connexion');
    console.error('Erreur lors du login:', error);
    res.redirect('/auth/login');
    }
}