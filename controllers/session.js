import User from '../models/user.js';
import Session from '../models/session.js';
import { Op } from 'sequelize';
import {validateMatriculeFormat} from '../middleware/matricule_validate.js'
import {getCurrentWeekDates} from '../utilis/week.js'
import { formatSessionData,formatStudentData  } from '../utilis/format_data.js';

const validateMatricule = (req, res, next) => {
    const { matricule } = req.params;
    
    const validationResult = validateMatriculeFormat(matricule);
    
    if (!validationResult.isValid) {
      return res.status(400).json({ 
        success: false,
        message: validationResult.message || "Matricule invalide" 
      });
    }
    next();
  };

export const session = async (req,res)=>{
    const { matricule } = req.params;
  
  try {
    // Recherche de l'utilisateur
    const user = await User.findOne({
      where: { matricule }
    });
    
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: "❌Ce matricule n'existe pas. Veuillez créer un compte."
      });
    }
    
    // Obtention des dates de la semaine
    const { start: startDate, end: endDate } = getCurrentWeekDates();
    
    // Recherche des séances pour la semaine
    const sessions = await Session.findAll({
      where: {
        jour: {
          [Op.between]: [startDate, endDate]
        },
        filiere: user.filiere,
        niveau: user.niveau
      },
      order: [['jour', 'ASC'], ['debut', 'ASC']]
    });
    // Construction de la réponse
    res.status(200).json({
      success: true,
        weekRange: {
          debut: startDate,
          fin: endDate
        },
        user: formatStudentData(user),
        seances: formatSessionData(sessions)
    });
    
  } catch (error) {
    console.error('Erreur dans la route seance/:matricule', { 
      matricule,
      error: error.message,
      stack: error.stack
    });
    
    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'production' ? undefined : error.message
    });
  }
};

export const create_session = async (req, res) => {
  const data = req.body;
   console.log("data",data);
  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({
      success: false,
      message: "❌ Les données fournies sont invalides ou vides."
    });
  }

  try {
    const sessions = await Session.bulkCreate(data);
    res.status(201).json({
      success: true,
      message: "✅ Les séances ont été créées avec succès.",
      sessions
    });
  } catch (error) {
    console.error('Erreur dans la route create_session', {
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'production' ? undefined : error.message
    });
  }
};

export const update_session = async (req,res)=>{
  const {id} = req.params;
    const {cours, jour , lieu , debut, fin ,enseignant , filiere, niveau , creat_by} = req.body;
    try {
       const find_session = Session.findOne({where:{id:id}});
       if(!find_session){
        res.status(404).json({
          success: false,
          message: "❌ la seance n'existe pas.",
        });
       }
      const session = Session.create({
        cours, jour , lieu , debut, fin ,enseignant , filiere, niveau , creat_by
      });
      res.status(201).json({
        success: true,
        message: "✅ Les séances ont été modifie avec succès.",
        session
      });
    } catch (error) {
      console.error('Erreur dans la route update_session', {
        error: error.message,
        stack: error.stack
      });
  
      res.status(500).json({
        success: false,
        message: 'Erreur interne du serveur',
        error: process.env.NODE_ENV === 'production' ? undefined : error.message
      });
    }
}

export const delete_session = async (req,res)=>{
  const {id} = req.params
  try {
    const find_session = Session.findOne({where:{id:id}});
    if(!find_session){
     res.status(404).json({
       success: false,
       message: "❌ la seance n'existe pas.",
     });
    }

    const deleted = Session.destroy({where:{id:id}});
    res.status(201).json({
      success: true,
      message: "✅ La séance ont été supprimée avec succès.",
      deleted
    });
  } catch (error) {
    console.error('Erreur dans la route delete_session', {
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'production' ? undefined : error.message
    });
  }
}